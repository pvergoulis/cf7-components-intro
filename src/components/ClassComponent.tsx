import { Component } from "react";


class ClassComponent extends Component{
    render() {
        const title = "is a Class Component"
        return <h1 className={"text-red-400 text-center text-xl font-bold mt-12"}>{title}</h1>
    }
}

export default ClassComponent