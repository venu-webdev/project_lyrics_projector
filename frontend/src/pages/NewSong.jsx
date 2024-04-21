import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewSong = () => {
  const [currSong, setCurrSong]=useState({
    title: "",
    content: "",
    enTitle: ""
  })
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center pt-4 pb-8 overflow-auto bg-green-dark'>
      <div className='text-2xl text-white'>New Song</div>
      <div className='flex flex-col gap-3'>
        <div>
          <p className='text-sm text-gray-300 font-light'>Title</p>
          <input type="text" name='title' onInput={
            (e) => {
              setCurrSong({
                ...currSong,
                title: e.target.value
              })
            }
          } className='text-gray-300 focus:text-white pt-4 pb-2 pl-4 outline-none bg-green-medium rounded-sm font-anektelugu w-[400px]' />
        </div>
        <div>
          <p className='text-sm text-gray-300 font-light'>Title (in English)</p>
          <input type="text" name='title' onInput={
            (e) => {
              setCurrSong({
                ...currSong,
                enTitle: e.target.value
              })
            }
          } className='text-gray-300 focus:text-white pt-4 pb-2 pl-4 outline-none bg-green-medium rounded-sm font-anektelugu w-[400px]' />
        </div>
        <div>
          <p className='text-sm text-gray-300 font-light'>Lyrics</p>
          <div className='w-[500px] h-[500px]'>
            <textarea className=' text-gray-300 focus:text-white pt-4 pb-2 pl-4 outline-none bg-green-medium rounded-sm w-full h-full font-anektelugu overflow-auto ' name="content" id="" onInput={
              (e) => setCurrSong({ ...currSong, content: e.target.value })
            }>
            </textarea>
          </div>
        </div>
        <button className='bg-green-light p-2 rounded-sm' onClick={async () => {
          console.log("inside the async function: ", currSong)
          await axios.post(`http://localhost:2000/song`, { data: currSong })
            .then((response) => {
              console.log("submitted add song contents: ", response.data.msg)
              if(response.data.msg){
                alert(response.data.msg)
              }
              navigate("/")
            })
            .catch(e => console.error(e))
        }}>Submit</button>
      </div>
    </div>
  )
}

export default NewSong