import Logo from "./logo";
import Menu from "./menu";
import Account from "./account";

export default function SideBar() {
    return (
        <aside className="w-[275px] min-h-screen px-2 flex flex-col">
            <Logo />
            <Menu />

            <Account />

        </aside>
    )
    
}