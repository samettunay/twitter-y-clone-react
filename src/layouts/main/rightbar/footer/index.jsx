import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
	return (
		<footer className="mb-4 px-4 flex flex-wrap gap-2 text-[0.813rem]">
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Terms of Service</Link>
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Privacy Policy</Link>
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Cookie Policy</Link>
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Imprint</Link>
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Accessibility</Link>
			<Link to="/" className="text-[#71767b] leading-4 hover:underline">Ads info</Link>
			<div className="inline-flex gap-2 flex-wrap">
				<Popover className="relative inline-flex leading-4">
					<Popover.Button
						className="text-[#71767b] outline-none leading-4 hover:underline inline-flex items-center">
						More
						<svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
								<path
									fill="currentColor"
									d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
								/>
						</svg>
					</Popover.Button>
					<Popover.Panel className="w-[176px] max-w-[24rem] bg-black shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
						<Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[#eff3f41a] transition-colors">
							About
						</Link>
						<Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[#eff3f41a] transition-colors">
							Download the Y app
						</Link>
						<Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[#eff3f41a] transition-colors">
							X for Business
						</Link>
						<Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[#eff3f41a] transition-colors">
							Developers
						</Link>
					</Popover.Panel>
				</Popover>
				<p className="text-[#71767b] leading-4">
					&copy; 2025 SAMETTUNAY
				</p>
			</div>
		</footer>
	)
}