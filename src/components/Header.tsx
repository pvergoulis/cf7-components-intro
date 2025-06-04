import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";



const Header = () =>{
    return (
        <>
        <header className="bg-[#782024] w-full fixed">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <CodingFactoryLogo/>
                <nav className="flex gap-4 ">
                    <Link to="/"  className="text-white hover:underline hover:underline-offset-4 font-semibold">Home</Link>
                    <Link to="/examples/online-status"  className="text-white hover:underline hover:underline-offset-4 font-semibold">Online</Link>
                    <Link to="/examples/name-changer"  className="text-white hover:underline hover:underline-offset-4 font-semibold">NameChanger</Link>
                </nav>
            {/*<a className="text-white hover:underline hover:underline-offset-4 font-semibold" href="/">Home</a>*/}

            </div>

        </header>
        </>
    )
}

export default Header