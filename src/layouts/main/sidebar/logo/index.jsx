import logoWhite from "~/assets/images/letter-y-white.png";
import logoBlack from "~/assets/images/letter-y-black.png";
import { Link } from "react-router-dom";
import { useAppearance } from "~/store/appearance/hooks";

export default function Logo() {
    const { backgroundColor } = useAppearance();
    const logo = backgroundColor.name === 'light' ? logoBlack : logoWhite;

    return (
        <div className="py-0.5">
            <Link to="/" className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[color:var(--background-third)] transition-colors">
                <img src={logo} alt="logo" className="w-7 h-7 object-cover" />
            </Link>
        </div>
    )
}