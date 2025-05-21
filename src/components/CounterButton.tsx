type ButtonProps = {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    addClass?: string;
}


const CounterButton = ({onClick, label, disabled= false, addClass = "bg-black"} : ButtonProps) =>{
    return (
        <>
            <button
                onClick={onClick}
                className={" text-white w-26 h-10 rounded-xl disabled:bg-gray-600 " + addClass}
                disabled={disabled}
            >{label}</button>
        </>
    )
}

export default CounterButton;