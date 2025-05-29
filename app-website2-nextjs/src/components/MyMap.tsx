import Link from "next/link";

export function MyMap() {
    return (
        <div
            className="flex flex-col w-full min-w-0 aspect-square"
        >
            <div className="flex-1 relative">
                <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1KbGoKJO7FHHM2dcmUZ0XpOAWMx8K5Ck&ehbc=2E312F"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="p-2 text-sm bg-white">
                <Link href="https://www.google.com/maps/d/edit?mid=1KbGoKJO7FHHM2dcmUZ0XpOAWMx8K5Ck&usp=sharing" target="_blank">
                    <span style={{ color: "#3333FF", textDecoration: "underline" }}>大きな地図で表示</span>
                </Link>
            </div>
        </div>
    );
};

