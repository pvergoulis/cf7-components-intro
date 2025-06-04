import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from 'react-router'
const RouterLayout = (() => {

    return (
       <>
           <HeaderResponsive/>

           <div className="mx-auto min-h-[100vh] pt-24">
                <Outlet/>
           </div>

           <Footer/>
       </>
    )
})

export default RouterLayout;