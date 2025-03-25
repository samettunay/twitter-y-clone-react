import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";
import WhoFollow from "./who-fallow";
import Footer from "./footer";
import StickyBox from "react-sticky-box";

export default function RightBar() {
    return (
        <StickyBox className="self-start" offsetBottom={25}>
            <aside className="w-[350px] mr-2.5 pb-16">
                <Search />
                <Premium />
                <Topics />
                <WhoFollow />
                <Footer />
            </aside>
        </StickyBox>
    )
    
}