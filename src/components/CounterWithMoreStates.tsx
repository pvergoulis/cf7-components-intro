import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("")
    const [time, setTime] = useState("")



    const getCurrentTime =() => new Date().toLocaleTimeString();


    const increaseCount = () => {
        setCount(count + 1);
        setLastAction("Increase")
        setTime(getCurrentTime())
    }

    const decreaseCount = () => {
        setCount(count - 1);
        setLastAction("Decrease")
        setTime(getCurrentTime())
    }

    const resetCount = () => {
        setCount(0);
        setLastAction("Reset")
        setTime(getCurrentTime())
    }

    return (
        <>
            <div className="space-y-4 pt-12 text-2xl">
                <h1 className="text-center">the count is {count}     {count > 5 ?   <p>😀</p> : <p>😥</p> }</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label={"Increase"}/>
                    <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={count === 0}/>
                    <CounterButton onClick={resetCount} label={"Reset"} disabled={count === 0} addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center mt-4">Last change: <strong>{lastAction || "-"}</strong>  at  <strong>{time || "-"}</strong></p>

        </>
    )

}

export default CounterWithMoreStates;