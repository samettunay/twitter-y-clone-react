import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Bookmarks from "~/pages/bookmarks";
import Communities from "~/pages/communities";
import Explore from "~/pages/explore";
import Grok from "~/pages/grok";
import Home from "~/pages/home";
import Jobs from "~/pages/jobs";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";
import VerifiedOrgs from "~/pages/verified-orgs";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: '/notifications',
                element: <Notifications />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/lists',
                element: <Lists />
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            },
            {
                path: '/:slug',
                element: <Profile />
            },
            {
                path: '/grok',
                element: <Grok />
            },
            {
                path: '/jobs',
                element: <Jobs />
            },
            {
                path: '/communities',
                element: <Communities />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/verified-orgs',
                element: <VerifiedOrgs />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
])

export default routes;