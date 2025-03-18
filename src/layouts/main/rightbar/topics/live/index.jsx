export default function Live() {
    return (
        <div className="py-3 px-4 flex items-center gap-2 w-[348px] h-[104px] hover:bg-[#080808] transition-colors">
            <img className="h-[79px] w-[79px] rounded-3 object-cover rounded-xl" src="src/assets/images/live.jpeg" alt="" />
            <div className="flex flex-col">
                <div className="font-bold">
                    From the Desk of Anthony Pompliano
                </div>
                <span className="relative text-[#71767b]">
                    Live
                </span>
            </div>
        </div>
    )
}
