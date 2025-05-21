import {useState} from "react";
import CounterButton from "./CounterButton.tsx";
const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const resetCount = () => {
        setCount(0);
    }

    const decreaseCount = () => {

        setCount(count - 1);
    }

    return (
        <>
            <div className="space-y-4 pt-12 text-2xl">
                <h1 className="text-center">the count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label={"Increase"}/>
                    <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={count === 0}/>
                    <CounterButton onClick={resetCount} label={"Reset"} disabled={count === 0} addClass="bg-cf-dark-red"/>
                </div>

            </div>

            {/*<div className="text-center mt-4">*/}
            {/*    <h1> The count is: {count}</h1>*/}
            {/*    <div className="space-x-4">*/}
            {/*        <button*/}
            {/*            onClick={() => increaseCount()}*/}
            {/*            className="bg-blue-500 text-white w-26 h-10 border rounded-xl "*/}
            {/*        >+</button>*/}
            {/*        <button*/}
            {/*            onClick={() => resetCount()}*/}
            {/*            className="bg-blue-500 text-white w-26 h-10 border rounded-xl disabled:bg-gray-500"*/}
            {/*            disabled={count === 0}*/}
            {/*        >Reset</button>*/}

            {/*        <button*/}
            {/*            onClick={() => decreaseCount()}*/}
            {/*            className="bg-blue-500 text-white w-26 h-10 border rounded-xl disabled:bg-gray-600"*/}
            {/*            disabled={count === 0}*/}
            {/*        >-</button>*/}

            {/*    </div>*/}

            {/*</div>*/}
        </>
    )
}

export default Counter