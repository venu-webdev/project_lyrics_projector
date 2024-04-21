import React from 'react'
import EditIcon from './../icons/EditIcon';
import DeleteIcon from './../icons/DeleteIcon';



const SongTab = ({title,number,id}) => {
  return (
    <div id={id} className='flex justify-between bg-green-medium w-[350px] items-center border-[1px] border-transparent my-1 px-4 py-2 rounded-sm hover:bg-green-dark hover:border-green-medium hover:border-[1px]'>
        <div id={id} className='flex text-green-semi-light hover:text-white cursor-pointer pointer-events-none items-center justify-center gap-2'>
            <div className='pr-2'>{number}</div>
            <div className='font-anektelugu mt-2' >{title}</div>
        </div>
        {/* <div className='flex gap-2'>
            <div className='flex hover:bg-green-light rounded-sm w-6 h-6 justify-center items-center'><EditIcon  id={id} fillColor={'#65a019'}></EditIcon></div>
            <div className='flex hover:bg-red-300 rounded-sm w-6 h-6 justify-center items-center'><DeleteIcon id={id}  fillColor={'#65a019'}></DeleteIcon></div>
        </div> */}
    </div>
  )
}

export default SongTab