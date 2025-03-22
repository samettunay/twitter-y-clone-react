import { Helmet } from 'react-helmet'
import Tab from '~/components/tab'
import StickyHeader from '~/components/sticky-header'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home / Y</title>
            </Helmet>
            <Tab activeTab="followings">
				<StickyHeader>
					<Tab.Items>
						<Tab.Item id="for-you">
							For You
						</Tab.Item>
						<Tab.Item id="followings">
							Following
						</Tab.Item>
					</Tab.Items>
				</StickyHeader>
				<Tab.Content id="for-you">
					1. content
				</Tab.Content>
				<Tab.Content id="followings">
					2. content
				</Tab.Content>
			</Tab>
        </>
    )

}
