import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/TodoProvider'
import { v1 } from 'uuid';
import "./Todo.css"
function TodoInput() {
    const [name, setName] = useState("")
    var todoContext = useContext(TodoContext);
    return (
        <div className="row">
            <div>
                <h1>Todo List</h1>
            </div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ex. do coding" className="col form-control" type="text" />
            <div
                onClick={() => {
                    if (name !== "") {
                        todoContext.addTodo({
                            id: v1(),
                            title: name
                        })
                        setName("");
                    }
                }}
                className="ml-2 btn btn-primary">ADD</div>
        </div>
    )
}

export default TodoInput