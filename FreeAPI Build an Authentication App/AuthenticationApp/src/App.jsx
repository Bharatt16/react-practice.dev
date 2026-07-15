import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Routes , Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Authentication App</h1>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
