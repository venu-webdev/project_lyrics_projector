import React from 'react'
import SearchIcon from '../icons/SearchIcon'
import AddIcon from './../icons/AddIcon';
import SwitchIcon from './../icons/SwitchIcon';
import { useNavigate } from 'react-router-dom';

const Navbar = ({onQuery}) => {
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between px-24 gap-10 py-3'>
        <h1 onClick={()=>{navigate("/")}} className='cursor-pointer font-semibold text-2xl text-green-light'>Lyric<span className='text-white'>Show</span></h1>
        <div className='flex w-80 bg-green-medium outline-none border-transparent rounded-sm px-2 py-1.5 gap-1 items-center'>
          <SearchIcon fillColor={'#65a019'} ></SearchIcon>
          <input className='w-full bg-transparent outline-none text-white placeholder:text-green-normal' onInput={(e)=>{console.log(e.target.value)
            onQuery(e.target.value)
          }} type="text" placeholder='Search'/>
        </div>
        <div className='flex gap-2'>
          <div onClick={()=>{
            navigate("/new")
          }} className='flex hover:bg-green-medium rounded-sm w-8 h-8 justify-center items-center'>
            <AddIcon fillColor={'#65a019'}></AddIcon>
          </div>
          <div className='flex hover:bg-green-medium rounded-sm w-8 h-8 justify-center items-center'>
            <SwitchIcon fillColor={'#65a019'}></SwitchIcon>
          </div>
        </div>
    </nav>
  )
}

export default Navbar