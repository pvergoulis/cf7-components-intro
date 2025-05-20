type Props = {
    title: string
}

// interface Props {
//     title: string
// }

const ArrowFunctionComponentWithProps = ({title}: Props) => {



    return (
        <h1 className={"text-yellow-400 text-center text-xl font-bold mt-12"}>{title}</h1>
    )
}

export default ArrowFunctionComponentWithProps