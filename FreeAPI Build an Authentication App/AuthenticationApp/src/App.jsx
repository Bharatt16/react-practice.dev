import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Authentication App</h1>
      <Dashboard />
    </>
  )
}

export default App
