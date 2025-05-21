// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionComponent from "./components/ArrowFunctionComponent.tsx";
// import ArrowFunctionComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
// import ArrowFunctionComponentWithPropsTypes from "./components/ArrowFunctionalComponentWithPropsTypes.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

function App() {

    return (
        <>
           <Layout>
               {/*<h1 className="text-2xl font-bold text-center">This is a title</h1>*/}
               {/*<CodingFactoryLogo/>*/}
               {/*<ClassComponent/>*/}
               {/*<FunctionalComponent/>*/}
               {/*<ArrowFunctionComponent/>*/}
               {/*<ArrowFunctionComponentWithProps title={"is Arrow Component with Props"}/>*/}
               {/*<ArrowFunctionComponentWithPropsTypes title={"is Arrow Component with Props"} description={"this is a description"} />*/}
               {/*<FunctionalComponentWithState/>*/}
               <Counter/>

               {/*<ClassComponentWithState/>*/}
           </Layout>



        </>
    )
}

export default App
