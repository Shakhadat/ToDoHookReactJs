import React from "react";

const Todo = ({text, todo, todos, setTodos})=>{

    const DeleteHandler=()=>{
            setTodos(todos.filter(el=> el.id!==todo.id))
    }
    const copmpleteHandler=()=>{
        setTodos(todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item, completed:!item.completed};
                    
                }
                return item; 
        }))
    }

    const editHandler=()=>{
        console.log("todo",todo);
        
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{text:prompt("edit this task")};
                
            }
            return item; 
    }))
        
    }
    return(
            <div className="todo">
                <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
                <button onClick={copmpleteHandler} className="complete-btn"><ion-icon name="checkmark-outline"></ion-icon></button>
                <button onClick={DeleteHandler} className="trash-btn"><ion-icon name="trash-outline"></ion-icon></button>
                <button onClick={editHandler} className="edit-btn"><ion-icon name="create-outline"></ion-icon></button>
            </div>
    );
}

export default Todo;