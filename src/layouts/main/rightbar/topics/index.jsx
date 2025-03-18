import { topics } from "~/utils/consts";
import Topic from "~/layouts/main/rightbar/topics/topic";
import SidebarSection from "~/components/sidebar-section";
import Live from "./live";
export default function Topics() {
    return (
        <SidebarSection
            title="What’s happening"
            more="/trends"
        >
            <Live />
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
        </SidebarSection>
    )
}