import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {

    const { userId }= useParams();  {/* Path param*/}

    {/* query param*/}
    // const {searchParams} = useSearchParams()
    // const id = searchParams.get("id");
    // const name = searchParams.get("name");


    useEffect(() => {
        document.title = `CF7 User id: ${userId}`;
    }, [userId]);

    return (
        <>
            <h1>User with id: {userId}</h1>
        </>
    )
}

export default UserPage