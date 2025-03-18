import Button from "~/components/button";

export default function Premium() {
    return (
        <section
            className="mb-4 rounded-2xl border border-[#333639] py-3 px-4 flex flex-col gap-2.5"
        >
            <h6 className="text-xl leading-6 font-extrabold">Subscribe to Premium</h6>
            <p className="leading-5 font-medium">
                Subscribe to unlock new features and if eligible, receive a share of revenue.
            </p>
            <div className="self-start w-[106.8px]">
                <Button className="bg-[#1d9bf0] text-white w-[106.8px]">Subscribe</Button>
            </div>
        </section>
    )
}