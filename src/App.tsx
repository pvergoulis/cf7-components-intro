// import ViteIntro from "./pages/ViteIntro.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionComponent from "./components/ArrowFunctionComponent.tsx";
import ArrowFunctionComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
import ArrowFunctionComponentWithPropsTypes from "./components/ArrowFunctionalComponentWithPropsTypes.tsx";
function App() {

    return (
        <>

                <ClassComponent/>
                <FunctionalComponent/>
                <ArrowFunctionComponent/>
                <ArrowFunctionComponentWithProps title={"is Arrow Component with Props"}/>
               <ArrowFunctionComponentWithPropsTypes title={"is Arrow Component with Props"} description={"this is a description"} />


        </>
    )
}

export default App
