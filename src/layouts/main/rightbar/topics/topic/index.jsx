import {Link} from "react-router-dom";
import {numberFormat} from "~/utils/formats";
import {Popover} from "@headlessui/react";
import ReportButton from "./report-button";

export default function Topic({item}) {
	return (
		<Link
			to="/"
			className="py-3 px-4 transition-colors hover:bg-[#080808] relative"
		>
			<div className="text-[0.813rem] text-[#71767b] leading-4">{item.title}</div>
			<div className="font-bold leading-5 mt-0.5">
				{item.topic.type === 'tag' && '#'}{item.topic.value}
			</div>
			{item?.postCount && (
				<div className="text-[0.813rem] text-[#71767b] mt-1 leading-4">
					{numberFormat(item.postCount)} posts
				</div>
			)}
			<Popover className="absolute top-1.5 right-2">
				<Popover.Button
					className="outline-none w-[34.75px] h-[34.75px] rounded-full text-[#71767b] flex items-center justify-center hover:text-[#1d9bf0] transition-colors relative before:absolute before:inset-0 before:rounded-full hover:bg-[#1d9bf0]/20 before:transition-all before:z-[-1] before:opacity-[.15] z-[1]"
				>
					<svg viewBox="0 0 24 24" className="h-[1.172rem]">
						<path
							fill="currentColor"
							d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
						/>
					</svg>
				</Popover.Button>
				<Popover.Panel className="w-[24rem] rounded-xl grid absolute top-2 overflow-hidden right-0 bg-black shadow-[0_0_15px_rgba(255,255,255,0.2)] z-[2]">
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