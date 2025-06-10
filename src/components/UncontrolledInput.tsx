import {useRef} from "react";

const UncontrolledInput = () =>{

    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    // }


    const handleClick = () => {
        alert(`value: ${inputRef.current?.value}`);
    }

    return (
        <>
        <div className="text-center mt-4">
            <input
                ref={inputRef}
                // onChange={handleChange}
                className="border rounded px-4 py-2 me-2"
                type="text"/>
            <button
                onClick={handleClick}
                className="bg-cf-dark-red text-white px-4 py-2 rounded "
            >
                Show Value
            </button>

        </div>
        </>
    )
}

export default UncontrolledInput;