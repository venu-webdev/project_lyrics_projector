import React from 'react'


const SongTab = ({ title, number, id, enTitle }) => {
  return (
    <div id={id} className='flex flex-col justify-start bg-green-medium w-[350px] items-start px-4 border-[1px] border-transparent my-1 py-2 rounded-sm hover:bg-green-dark hover:border-green-medium hover:border-[1px]'>
      <div id={id} className='flex text-green-semi-light hover:text-white cursor-pointer pointer-events-none items-center justify-center gap-2'>
        <div className='pr-2'>{number}</div>
        <div>
          <div className='font-anektelugu' >{title}</div>
          <div className='text-xs'>
            {enTitle}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SongTab