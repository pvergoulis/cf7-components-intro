import {useState} from "react";


type CounterState = {
    count : number;
    lastAction : string;
    time : string;

}
export
const useAdvancedCounter = (initialValue: number = 0) => {

    const [state, setState]= useState<CounterState>({
        count: 0,
        lastAction : "",
        time : ""
    })

   const getCurrentTime = () => new Date().toLocaleDateString()

    const increase = () => {
        setState({
            count : state.count +1,
            lastAction: state.lastAction = "Increase",
            time : getCurrentTime(),
        })
    }


    const decrease = () => {
        setState({
            count : state.count -1,
            lastAction: state.lastAction = "Decrease",
            time: getCurrentTime(),
        })
    }

    const reset = () => {
        setState({
            count : state.count = initialValue,
            lastAction: state.lastAction = "Reset",
            time: getCurrentTime(),
        })
    }

    return {
        count : state.count,
        lastAction : state.lastAction,
        time : state.time,
        increase,
        decrease,
        reset,
    }

}