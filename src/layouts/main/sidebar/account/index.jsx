import { Popover, Transition } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import More from "./more";

export default function Account() {

    const account = useAccount();

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[color:var(--background-third)] w-full flex text-left items-center outline-none">
                    <img src={account?.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold text-[color:var(--color-base)]">{account?.fullname}</h6>
                        <div className="text-[color:var(--color-base-secondary)]">
                            @{account?.username}
                        </div>
                    </div>
                    <div className="ml-auto flex items-center text-[color:var(--color-base-secondary)]">
                        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                        </svg>
                    </div>

                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <Popover.Panel className="absolute bottom-full py-3 w-[300px] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] rounded-2xl shadow-[var(--box-shadow)] border border-[color:var(--background-border)] overflow-hidden">
                        <More />
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}
