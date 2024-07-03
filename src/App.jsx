import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovies from './component/Viewmovies'
import Addmovies from './component/Addmovies'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/add' element={<Addmovies/>}></Route>
    <Route path='/view' element={<Viewmovies/>}></Route>
    </Routes>
    </>
  )
}

export default App
