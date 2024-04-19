import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {
  const [query, setQuery] = useState("")
  return (
    <div className='font-poppins bg-green-dark w-full h-full'>
      <Navbar onQuery={setQuery}></Navbar>
      <Outlet context={[query]} ></Outlet>
    </div>
  )
}

export default App
