import { Link } from "react-router-dom";
import logo from "~/assets/images/letter-y-white.png";

export default function Logo() {
    return (
        <div className="py-0.5">
            <Link to = "/" className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors">
                <img src={logo} alt="logo" className="w-7 h-7 object-cover" />
            </Link>
        </div>
    )
}