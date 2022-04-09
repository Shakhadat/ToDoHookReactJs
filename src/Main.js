import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from './App'
import Register from './Register'
import './Main.css'

class Main extends React.Component{
    render(){
        return(
            <main>
                <Routes>
                    <Route path='/' element={<Register/>}/>
                    <Route path='/todo' element={<App/>}/>
                    
                </Routes>
            </main>
        )
    }
}
export default Main;