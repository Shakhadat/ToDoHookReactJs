import React, {useState, useEffect} from 'react'
import './App.css';
// importing components
import Form from './component/Form';
import Todolist from './component/Todolist';

function App() {
  // useaffect

  
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

 
  // function

  const filterHandler=()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;

        case "uncompleted":
          setFilteredTodos(todos.filter(todo=>todo.completed===false));
          break;

          default: setFilteredTodos(todos);
          break;
    }
  }

  //use effect
  useEffect(()=> {filterHandler()}, [todos, status]);

  return (
    <div className="container">
      <header>
          <h1>Shahodat's To do list</h1>
      </header>
      <Form 
      inputText={inputText}
       todos={todos}
        setTodos={setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
      

       />
      <Todolist  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
