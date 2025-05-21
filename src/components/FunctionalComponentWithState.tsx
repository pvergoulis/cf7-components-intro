import {useState} from "react";

const FunctionalComponentWithState = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="text-center mt-4">
                <h1> The count is: {count}</h1>
                <div className="space-x-4">
                    <button
                        onClick={() => increaseCount()}
                        className="bg-blue-500 text-white w-26 h-10 border rounded-xl "
                    >+</button>
                    <button
                        onClick={() => resetCount()}
                        className="bg-blue-500 text-white w-26 h-10 border rounded-xl "
                    >Reset</button>
                </div>

            </div>
        </>
    )
}

export default FunctionalComponentWithState