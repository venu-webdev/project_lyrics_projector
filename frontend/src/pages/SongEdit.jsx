import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SongEdit = () => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log("location:", location.state.song._id)
  let [currSong, setCurrSong] = useState(location.state.song)
  console.log("useState:", currSong)
  return (
    <div className='flex flex-col justify-center items-center pt-4 pb-8 overflow-auto bg-green-dark'>
      <div className='text-2xl text-white'>Song Edit</div>
      <div className='flex flex-col gap-3'>
        <div>
          <p className='text-sm text-gray-300 font-light'>Title</p>
          <input type="text" name='title' value={currSong.title} onInput={
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
          <input type="text" name='title' value={currSong.enTitle} onInput={
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
            <textarea className=' text-gray-300 focus:text-white pt-4 pb-2 pl-4 outline-none bg-green-medium rounded-sm w-full h-full font-anektelugu overflow-auto ' name="content" id="" value={currSong.content} onInput={
              (e) => setCurrSong({ ...currSong, content: e.target.value })
            }>
            </textarea>
          </div>
        </div>
        <button className='bg-green-light p-2 rounded-sm' onClick={async () => {
          console.log("inside the async function: ", currSong)
          await axios.put(`https://project-lyrics-projector-server.vercel.app/song/${currSong._id}`, { data: currSong })
            .then((response) => {
              console.log("submitted edit contents: ", response.data)
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

export default SongEdit