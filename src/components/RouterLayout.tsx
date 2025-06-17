import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from 'react-router'
import {Toaster} from "sonner";


const RouterLayout = (() => {

    return (
       <>
           <HeaderResponsive/>

           <div className="mx-auto min-h-[100vh] pt-24">
                <Outlet/>
           </div>

           <Footer/>
           <Toaster richColors/>
       </>
    )
})

export default RouterLayout;