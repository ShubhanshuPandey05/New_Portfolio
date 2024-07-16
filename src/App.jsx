import { useState } from 'react'
import './App.css'
import FrontPage from './Pages/FrontPage'
import { Routes, Route } from 'react-router-dom'
import ProjectPage from './Pages/ProjectPage'

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<FrontPage />}/>
        <Route  path='/Projects' element= {<ProjectPage />}/>
      </Routes>
    </>
  )
}

export default App
