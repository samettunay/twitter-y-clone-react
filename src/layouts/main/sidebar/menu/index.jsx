import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import Button from "~/components/button";
import More from "./more";
import New from "./new";

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="py-[3px] block group" key={index}>
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]", {
                            "font-bold": isActive
                        })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {menu?.notificationCount && (
                                    <span className="absolute -top-2 -right-2 bg-[#1d9bf0] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                        {menu?.notificationCount}
                                    </span>
                                )}
                                {isActive && menu.icon.active}
                                {!isActive && menu.icon.passive}
                            </div>
                            <div className="pr-4 text-xl">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}

            <More />

            <New />
        </nav>
    )
}