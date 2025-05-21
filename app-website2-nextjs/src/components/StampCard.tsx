"use client";

/*
スタンプカード
*/

import { useEffect, useState } from "react";
import Image from "next/image";
const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

import {
    getOrCreateUniqueUserId,
    getCookieValues,
    setCookie,
    deleteCookie,
    //checkCookieEnabled,
} from "@/lib/cookieUtils";
import { stampCard, stampDefs } from "@/data/stamps";
import { postStamp } from "@/lib/postStamp";

// 新しいスタンプを押したときの初期サイズ
const NEW_STAMP_INITIAL_SCALE = 5.0;


export function StampCard() {
    const [userId, setUserId] = useState<string>("");
    const [stampIds, setStampIds] = useState<string[]>([]);

    // 新しいスタンプを、stampIdsに追加し、クッキーを更新する
    const addNewStamp = (curCookieStamps:string[], newStampId:string): string[] => {
        let retStamps: string[] = [...curCookieStamps];

        // 今回のスタンプIDが、存在していなければ追加する
        if (!curCookieStamps.includes(newStampId)) {
            retStamps.push(newStampId);
        }

        return retStamps;
    }
    
    useEffect(() => {
        // URLパラメータを取得
        const searchParamsStrs = window.location.href.split('?');
        const params: URLSearchParams = new URLSearchParams(`?${searchParamsStrs[1]}`);

        // クッキーの削除パラメータがあった場合は、削除する
        const initializeParam: string | null = params.get("initialize");
        if (initializeParam) {
            deleteCookie('user_id');
            deleteCookie('stamp_ids');
            setUserId(getOrCreateUniqueUserId());
            setStampIds([]);
            return;
        }

        // クッキーから、ユーザーIDとスタンプIDを取得する
        const uid = getOrCreateUniqueUserId();
        let curCookieStamps = getCookieValues("stamp_ids");

        // URLパラメータのスタンプIDを取得する
        const newStampId: string | null = params.get("stampId");
        if (newStampId) {
            // スタンプIDが指定されている場合、stampIdsに追加し、curCookieStampsを更新する
            curCookieStamps = addNewStamp(curCookieStamps, newStampId);

            // 新しいスタンプ情報を、別のサーバーへPOST
            postStamp(uid, newStampId);
        }

        // state値を更新
        setStampIds(curCookieStamps);

        // クッキーの値を更新
        setCookie('user_id', uid);
        setCookie('stamp_ids', curCookieStamps.join(','));
    }, []);



    return (
        <div
            className="flex flex-col items-center justify-center"
        >
            <div>
                <h2 className="text-4xl font-bold">スタンプカード</h2>
            </div>
            <div
                className="relative w-full max-w-[600px] mx-auto"
            >
                <Image
                    src={`${imageBasePath}/${stampCard.image}`}
                    alt={stampCard.name}
                    className="w-full h-auto"
                    width={600}
                    height={600}
                />
                <style>
                    {`
                        @keyframes shrink {
                            from: {
                                transform: scale(${NEW_STAMP_INITIAL_SCALE});
                            }
                            to: {
                                transform: scale(1);
                            }
                        }
                    `}
                </style>
                {stampIds.map((stampId, index) => (
                    (stampDefs[stampId]) && (
                        <Image
                            key={index}
                            src={`${imageBasePath}/${stampDefs[stampId].image}`}
                            alt={stampDefs[stampId].name}
                            className="absolute"
                            style={{
                                left: "0px",
                                top: "0px",
                                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))",
                                transform: `rotate(-1deg)`
                            }}
                            width={600}
                            height={600}
                        />
                    )
                ))}
            </div>
            <div className="text-left text-gray-200 text-xs">
                {userId}
            </div>
        </div>
    );
}

