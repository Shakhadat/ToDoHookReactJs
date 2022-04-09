import React from "react";

const Form=({setInputText, todos, setTodos, inputText,  setStatus})=>{
    // js code here
    const inputTexthandler = (e) =>{
       console.log(e.target.value);
       setInputText(e.target.value)

    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        
        setTodos([...todos, {text: inputText, completed: false, id: Math.random().toString(36)}])
        setInputText("");
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <div className="headform">
            <input type="text" value={inputText} className="todo-input" onChange={inputTexthandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}><ion-icon name="add-outline"></ion-icon></button>
       
            </div>
             <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>

    );
}

export default Form;