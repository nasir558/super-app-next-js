import Side_bar from "./side_bar"

export default function Layout({ children }) {
    return (
        <section className="w-full min-h-screen bg-GreenC">
            <div className="flex flex-row">
                <div className="w-full max-w-[246px]">
                    <Side_bar />
                </div>
                <div className="bg-WhiteC rounded-tl-[40px] rounded-bl-[40px] flex-1 min-h-screen px-10 py-14">
                    {children}
                </div>
            </div>
        </section>
    )
}
