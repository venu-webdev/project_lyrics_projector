import React from 'react'
import { useNavigate } from 'react-router-dom';

const MissingPage = () => {
    const navigate = useNavigate();
  return (
    <div className='font-poppins  w-full h-full bg-green-dark flex justify-center items-center gap-2'>
        <div className='text-xl text-white'>Page not found!</div><button className="text-white border-transparent border-[1px] bg-green-medium hover:border-[1px] hover:bg-transparent hover:border-green-medium px-3 py-2 rounded-md" onClick={()=>navigate("/")}>Go back to home</button>
    </div>

  )
}

export default MissingPage