import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";


const HeaderResponsive = () =>{

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className="bg-[#782024] w-full fixed">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <CodingFactoryLogo/>

                <button
                    className="text-white md:hidden"
                    onClick={()=>{setMenuOpen(!menuOpen)}}
                >
                    {menuOpen ? <X size={36}/>: <Menu size={36}/>}

                </button>




                <nav

                    className={`${menuOpen ? "block" : "hidden"} md:flex gap-4 bg-cf-dark-red text-white w-full absolute top-24 left-0 p-4 md:p-0 md:w-auto md:static
                    `}>
                    <Link
                        onClick={()=>{setMenuOpen(false)}}
                        to="/"
                        className="block md:inline  hover:underline hover:underline-offset-4 font-semibold">Home</Link>

                    <Link
                        onClick={()=>{setMenuOpen(false)}}
                        to="/examples/online-status"
                        className="block md:inline hover:underline hover:underline-offset-4 font-semibold">Online</Link>

                    <Link
                        onClick={()=>{setMenuOpen(false)}}
                        to="/examples/name-changer"
                        className="block md:inline hover:underline hover:underline-offset-4 font-semibold">NameChanger</Link>
                </nav>
            {/*<a className="text-white hover:underline hover:underline-offset-4 font-semibold" href="/">Home</a>*/}

            </div>

        </header>
        </>
    )
}

export default HeaderResponsive