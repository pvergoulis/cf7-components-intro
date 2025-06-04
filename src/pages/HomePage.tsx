import {useEffect} from "react";

const HomePage = () =>{

    useEffect(() => {
        document.title = 'CF7 Home Page'
    }, []);

    return (
        <>
            <h1 className="text-bold text-2xl text-center">Home Page</h1>
        </>
    )
}

export  default HomePage