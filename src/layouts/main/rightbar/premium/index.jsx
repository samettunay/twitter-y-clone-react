import Button from "~/components/button";

export default function Premium() {
    return (
        <section
            className="mb-4 rounded-2xl border border-[color:var(--background-border)] bg-[color:var(--background-primary)] py-3 px-4 flex flex-col gap-2.5"
        >
            <h6 className="text-xl leading-6 font-extrabold text-[color:var(--color-base)]">Subscribe to Premium</h6>
            <p className="leading-5 font-medium text-[color:var(--color-base-secondary)]">
                Subscribe to unlock new features and if eligible, receive a share of revenue.
            </p>
            <div className="self-start w-[106.8px]">
                <Button className="bg-[color:var(--color-primary)] text-white w-[106.8px]">Subscribe</Button>
            </div>
        </section>
    )
}