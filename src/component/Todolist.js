import React from "react";
// import component
import Todo from "./Todo"

const Todolist=({todos, setTodos, filteredTodos})=>{
console.log("filter1",filteredTodos);

    return(
        <div className="todo-container">
            <ul className="todo-list">
            
            
                {filteredTodos.map(todo=>(
                <Todo 
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                text={todo.text}
                key={todo.id}/>))
                
                }
            </ul>
            {/* console.log(); */}
        </div>
    )
    console.log("filter4",filteredTodos);
}

export default Todolist;