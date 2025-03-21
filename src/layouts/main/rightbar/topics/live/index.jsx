export default function Live() {
    return (
        <div className="py-3 px-4 flex items-center gap-2 w-[348px] h-[104px] hover:bg-[color:var(--background-third)] transition-colors">
            <img
                className="h-[79px] w-[79px] rounded-3 object-cover rounded-xl"
                src="/live.jpeg"
                alt="" />
            <div className="flex flex-col">
                <div className="font-bold text-[color:var(--color-base)]">
                    From the Desk of Anthony Pompliano
                </div>
                <span className="relative text-[color:var(--color-base-secondary)]">
                    Live
                </span>
            </div>
        </div>
    )
}
