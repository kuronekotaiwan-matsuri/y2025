interface HeadMessageProps {
    message: string;
}

export function HeadMessage(props: HeadMessageProps) {
    return (
        <section id="kuroneko-head-message" className="px-[10%] my-8">
            <div className="border-6 border-red-400 p-4">
                {props.message}
            </div>
        </section>
    );
};

