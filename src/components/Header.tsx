import CodingFactoryLogo from "./CodingFactoryLogo.tsx";



const Header = () =>{
    return (
        <>
        <header className="bg-[#782024] w-full fixed">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <CodingFactoryLogo/>
            <a className="text-white hover:underline hover:underline-offset-4 font-semibold" href="/">Home</a>
            </div>

        </header>
        </>
    )
}

export default Header