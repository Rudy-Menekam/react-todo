import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Login/>}/>
    <Route  path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
