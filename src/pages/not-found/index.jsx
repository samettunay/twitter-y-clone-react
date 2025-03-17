import { Helmet } from 'react-helmet'

export default function NotFound() {
    return (
        <div className="bg-red-200 text-red-600 p-5 flex items-center justify-center">
            <Helmet>
                <title>Not Found / Y</title>
            </Helmet>
            Sayfa bulunamadı gardaş!
        </div>
    )

}
