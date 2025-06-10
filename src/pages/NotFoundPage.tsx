import {useEffect} from "react";
import {Link} from "react-router";

const NotFoundPage = ()=>{
    useEffect(() => {
        document.title = 'Error 404: Page Not Found'
    }, []);
    return (
        <>
            <div className="text-center py-36 space-y-6">
                <h1 className="text-center text-9xl text-cf-dark-red">404</h1>
                <p className="text-4xl text-cf-dark-gray text-center">Page not found</p>
                <p className="text-lg text-cf-dark-gray text-center">The Page you are looking for does not exists.</p>
                <Link
                    className="bg-cf-dark-red text-white px-4 py-2 roundedk"
                    to={'/'}>
                    Return to Home Page</Link>
            </div>

        </>
    )
}

export default NotFoundPage