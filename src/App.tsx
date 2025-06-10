// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionComponent from "./components/ArrowFunctionComponent.tsx";
// import ArrowFunctionComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
// import ArrowFunctionComponentWithPropsTypes from "./components/ArrowFunctionalComponentWithPropsTypes.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import Layout from "./components/Layout.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import Layout from "./components/Layout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";

// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
function App() {

    return (
        <>
           {/*<Layout>*/}
               {/*<h1 className="text-2xl font-bold text-center">This is a title</h1>*/}
               {/*<CodingFactoryLogo/>*/}
               {/*<ClassComponent/>*/}
               {/*<FunctionalComponent/>*/}
               {/*<ArrowFunctionComponent/>*/}
               {/*<ArrowFunctionComponentWithProps title={"is Arrow Component with Props"}/>*/}
               {/*<ArrowFunctionComponentWithPropsTypes title={"is Arrow Component with Props"} description={"this is a description"} />*/}
               {/*<FunctionalComponentWithState/>*/}
               {/*<Counter/>*/}
               {/* <NameChanger/>*/}
               {/*<ClassComponentWithState/>*/}
               {/* <OnlineStatus/>*/}
               {/*<CounterWithMoreStates/>*/}
               {/*<CounterAdvanced/>*/}
               {/*<CounterWithCustomHook />*/}
               {/*<CounterAdvancedWithCustomHook/>*/}
               {/*<CounterWithCustomHook />*/}
               {/*<CounterWithReducer />*/}

               {/*<Todo/>*/}
           {/*</Layout>*/}
        <BrowserRouter>
            {/*<Layout>*/}
             <Routes>
                {/*<Route path="/" element={<HomePage/>}/>*/}
                 <Route element={<RouterLayout/>}>
                     <Route index element={<HomePage/>}/>
                     <Route path="users/:userId" element={<UserPage />}/> {/* Path params*/}

                     <Route path="users" element={<UserPage/>} />   {/* query params*/}
                </Route>

                 <Route index element={<HomePage/>}/>
                <Route path="/name-changer" element={<NameChangerPage/>}/>

                 {/*<Route path="examples?"/>*/}
                 <Route path="examples" element={<RouterExamplesLayout />}>
                     <Route index element={<ExamplesPage/>}/>
                     <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                     <Route path="name-changer" element={<NameChangerPage/>}/>
                     <Route path="online-status" element={<OnlineStatusPage/>}/>
                 </Route>



                 {/*<Route path="files/*" element={<FilePage/>}/>*/}

                 <Route path="*" element={<NotFoundPage/>}/>
             </Routes>
            {/*</Layout>*/}
        </BrowserRouter>


        </>
    )
}

export default App
