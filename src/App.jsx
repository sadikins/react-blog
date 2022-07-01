import React from 'react'
import {TopBar} from "./components"
import  {Homepage, Login, Write, Settings, Single, Register }  from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <TopBar/>
    
      <Routes>

        <Route exact path="/" element={<Homepage />}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/login' element={<Login/>}/>
          
      </Routes>

    </BrowserRouter>
  )
}

export default App
