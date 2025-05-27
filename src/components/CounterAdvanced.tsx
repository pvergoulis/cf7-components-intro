import CounterButton from "./CounterButton.tsx";
import {useState} from "react";

type CounterState = {
    count : number;
    lastAction : string;
    time : string;

}


const CounterAdvanced = () =>{


    const [state, setState]= useState<CounterState>({
        count: 0,
        lastAction : "",
        time : ""
    })

    const getCurrentTime =() => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setState({
            count : state.count +1 ,
            lastAction: state.lastAction = "Increase",
            time : state.time = getCurrentTime()
        })
    }

    const decreaseCount = () => {
        setState({
            count : state.count -1,
            lastAction: state.lastAction = "Decrease",
            time : state.time = getCurrentTime()
        })
    }


    const resetCount = () => {
        setState({
            count: state.count =0,
            lastAction: state.lastAction = "Reset",
            time : state.time = getCurrentTime()
        })
    }

    return (
        <>
            <div className="space-y-4 pt-12 text-2xl">
                <h1 className="text-center">the count is {state.count}     {state.count > 5 ?   <p>😀</p> : <p>😥</p> }</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label={"Increase"}/>
                    <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={state.count === 0}/>
                    <CounterButton onClick={resetCount} label={"Reset"} disabled={state.count === 0} addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center mt-4">Last change: <strong>{state.lastAction || "-"}</strong>  at  <strong>{state.time || "-"}</strong></p>
        </>
    )
}

export default CounterAdvanced