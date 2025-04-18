/*
スタンプカード
*/

import { useEffect, useState } from "react";
import {
    getOrCreateUniqueUserId,
    getCookieValues,
    setCookie,
    deleteCookie,
    //checkCookieEnabled,
} from "../utilities/cookieUtils";
import { stampCard, stampDefs } from "../data/stamps";
import { postStamp } from "../utilities/postStamp";

// 新しいスタンプを押したときの初期サイズ
const NEW_STAMP_INITIAL_SCALE = 5.0;


export function StampCard() {
    const [userId, setUserId] = useState<string>(getOrCreateUniqueUserId());
    const [stampIds, setStampIds] = useState<string[]>(getCookieValues("stamp_ids"));
    //const [newStampId, setNewStampId] = useState<string | null>(null);
    //const [cookieEnabled] = useState<boolean>(checkCookieEnabled());
    //const [shrinkInitialStyle, setShrinkInitialStyle] = useState<React.CSSProperties>({});

    // 新しいスタンプを、stampIdsに追加し、クッキーを更新する
    const addNewStamp = (newStampId:string) => {
        // 今回のスタンプIDが、存在していなければ追加する
        if (!stampIds.includes(newStampId)) {
            const newStampIds = [...stampIds, newStampId];

            // 新しいスタンプを認識
            //setNewStampId(newStampId);

            // state値を更新
            setStampIds(newStampIds);

            // クッキーを更新
            setCookie('stamp_ids', newStampIds.join(','));
        }
    }
    
    useEffect(() => {
        const searchParamsStrs = window.location.hash.split('?');
        if (searchParamsStrs.length < 2) {
            return;
        }
        const params: URLSearchParams = new URLSearchParams(`?${searchParamsStrs[1]}`);
        const newStampId: string | null = params.get("stampId");
        if (newStampId) {
            // スタンプIDが指定されている場合、stampIdsに追加し、クッキーを更新する
            addNewStamp(newStampId);

            // 新しいスタンプ情報を、別のサーバーへPOST
            postStamp(userId, newStampId);
            
            //// 新しいスタンプの初期サイズを計算
            //const newStampShrinkInitialStyle: React.CSSProperties = {
            //    //left: `${stampDefs[newStampId].x - (stampDefs[newStampId].width * NEW_STAMP_INITIAL_SCALE)/2}%`,
            //    //top: `${stampDefs[newStampId].y - (stampDefs[newStampId].height * NEW_STAMP_INITIAL_SCALE)/2}%`,
            //    //width: `${stampDefs[newStampId].width}%`,
            //    transform: `scale(${NEW_STAMP_INITIAL_SCALE})`,
            //    animation: `shrink 1s ease forwards`,
            //}
            //setShrinkInitialStyle(newStampShrinkInitialStyle);
        }

        // クッキーの削除パラメータがあった場合は、削除する
        const initializeParam: string | null = params.get("initialize");
        if (initializeParam) {
            deleteCookie('user_id');
            deleteCookie('stamp_ids');
            setUserId(getOrCreateUniqueUserId());
            setStampIds([]);
        }
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
                <img
                    src={stampCard.image}
                    alt={stampCard.name}
                    className="w-full h-auto"
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
                        <img
                            key={index}
                            src={stampDefs[stampId].image}
                            alt={stampDefs[stampId].name}
                            className="absolute"
                            /*
                            style={
                                (newStampId && (newStampId === stampId))
                                    ? {
                                        ...shrinkInitialStyle,
                                    }
                                    : {
                                        left: `${stampDefs[stampId].x}%`,
                                        top: `${stampDefs[stampId].y}%`,
                                        width: `${stampDefs[stampId].width}%`,
                                    }
                            }*/
                           style={{
                            left: `${stampDefs[stampId].x}%`,
                            top: `${stampDefs[stampId].y}%`,
                            width: `${stampDefs[stampId].width}%`,
                        }}
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

