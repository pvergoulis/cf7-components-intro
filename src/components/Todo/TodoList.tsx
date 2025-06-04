type Todo = {
    id: number,
    text: string,
}

// type Action =
//     | {type: "ADD"; payload: string}
//     | {type: "DELETE"; payload : number}

type TodoListProps = {
    todos: Todo[]
    dispatch: React.Dispatch<{ type: "DELETE"; payload: number }>
}


const TodoList = ({todos, dispatch}: TodoListProps) =>{

    const handleDelete = (id : number): void => {
        dispatch({ type: "DELETE", payload: id })
    }

    return(
        <>
            <ul className="space-y-2">
                {todos.map(todo =>(
                    <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <span>{todo.text}</span>
                        <button
                            onClick={() =>handleDelete(todo.id)}
                            className="text-cf-dark-red hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))

                }



            </ul>
        </>
    )
}

export default TodoList;