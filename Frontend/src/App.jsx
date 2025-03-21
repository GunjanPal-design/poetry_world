import React from 'react'
import Signup from './Signup'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Dashboard from './Dashboard'
import Update from './Update'
// import Home from './Home'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {<Route path='/update/:id' element={<Update />} />}
        {/* <Route path='/' element={<Home />} /> */}

      </Routes>


    </div>
  )
}
export default App;
