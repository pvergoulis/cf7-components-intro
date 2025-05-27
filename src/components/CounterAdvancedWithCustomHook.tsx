import CounterButton from "./CounterButton.tsx";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts"

const CounterAdvancedWithCustomHook = () =>{

    // custom hook function
    const {count, lastAction, time, increase, decrease,reset} = useAdvancedCounter()

    return (
        <>
            <div className="space-y-4 pt-12 text-2xl">
                <h1 className="text-center">the count is {count}     {count > 5 ?   <p>😀</p> : <p>😥</p> }</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label={"Increase"}/>
                    <CounterButton onClick={decrease} label={"Decrease"} disabled={count === 0}/>
                    <CounterButton onClick={reset} label={"Reset"} disabled={count === 0} addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center mt-4">Last change: <strong>{lastAction || "-"}</strong>  at  <strong>{time || "-"}</strong></p>
        </>
    )
}

export default CounterAdvancedWithCustomHook;