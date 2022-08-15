import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import All from "./Components/All/All"
import { BrowserRouter } from "react-router-dom"

const App=()=>{
    return (
        <>
        
        <BrowserRouter>
        <Navbar />
        <All />
        </BrowserRouter>
        </>
    )
}

export default App