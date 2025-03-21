import {Link} from "react-router-dom";
import {numberFormat} from "~/utils/formats";
import {Popover} from "@headlessui/react";
import ReportButton from "./report-button";

export default function Topic({item}) {
	return (
		<Link
			to="/"
			className="py-3 px-4 transition-colors hover:bg-[color:var(--background-third)] relative"
		>
			<div className="text-[0.813rem] text-[color:var(--color-base-secondary)] leading-4">{item.title}</div>
			<div className="font-bold leading-5 mt-0.5 text-[color:var(--color-base)]">
				{item.topic.type === 'tag' && '#'}{item.topic.value}
			</div>
			{item?.postCount && (
				<div className="text-[0.813rem] text-[color:var(--color-base-secondary)] mt-1 leading-4">
					{numberFormat(item.postCount)} posts
				</div>
			)}
			<Popover className="absolute top-1.5 right-2">
				<Popover.Button
					className="outline-none w-[34.75px] h-[34.75px] rounded-full text-[color:var(--color-base-secondary)] flex items-center justify-center hover:text-[color:var(--color-primary)] transition-colors relative before:absolute before:inset-0 before:rounded-full hover:bg-[color:var(--color-primary)]/20 before:transition-all before:z-[-1] before:opacity-[.15] z-[1]"
				>
					<svg viewBox="0 0 24 24" className="h-[1.172rem]">
						<path
							fill="currentColor"
							d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
						/>
					</svg>
				</Popover.Button>
				<Popover.Panel className="w-[24rem] rounded-xl grid absolute top-2 overflow-hidden right-0 bg-[color:var(--background-primary)] border border-[color:var(--background-border)] shadow-[var(--box-shadow)] z-[2]">
                    <ReportButton title="The associated content is not relevant" />
                    <ReportButton title="This trend is spam" />
                    <ReportButton title="This trend is harmful or spammy" />
                    <ReportButton title="This trend is a duplicate" />
                    <ReportButton title="Not interested in this" />
                    <ReportButton title="This trend is abusive or harmful" />
				</Popover.Panel>
			</Popover>
		</Link>
	)
}