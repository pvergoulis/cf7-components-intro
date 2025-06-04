import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from 'react-router'
import ExamplesSection from "./Todo/ExamplesSection.tsx";
const RouterExamplesLayout = (() => {

    return (
       <>
           <HeaderResponsive/>

           <div className="mx-auto min-h-[75vh] pt-24">
                <Outlet/>
           </div>
            <ExamplesSection/>
           <Footer/>
       </>
    )
})

export default RouterExamplesLayout;