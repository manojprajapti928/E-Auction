import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Details from './Component/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Details' element={<Details/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
