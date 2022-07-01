import React from 'react'
import {TopBar} from "./components"
import  {Homepage, Login, Write, Settings, Single, Register }  from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const user = true;

  return (
    <BrowserRouter>

      <TopBar/>
    
      <Routes>

        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/posts" element={<Homepage />}/>
        <Route path='/register' element={user ? <Homepage/> : <Register/>}/>
        <Route path='/login' element={user ? <Homepage/> : <Login/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
        <Route path='/write' element={user ? <Write/> : <Login/>}/>
        <Route path='/settings' element={user ? <Settings/> : <Login/>}/>
          
      </Routes>

    </BrowserRouter>
  )
}

export default App
