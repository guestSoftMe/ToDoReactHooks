import React from 'react'
import Todolist from "./todolist";

let Todo = ({todos}) =>{
    return(
        <div>
            {todos.length > 0 ? todos.map(item=><Todolist key={item.id} {...item}/>) : false}
        </div>
    )
}

export default Todo
