import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet'

export default function Profile() {

    const { slug } = useParams();

    return (
        <div>
            <Helmet>
                <title>{slug} / Y</title>
            </Helmet>
            profile page - {slug}
        </div>
    )
}
