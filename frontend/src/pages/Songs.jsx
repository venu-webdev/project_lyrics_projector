import React, { useEffect, useState } from 'react'
import SongTab from './../components/SongTab';
import axios from 'axios';
import { NavLink, useOutletContext } from 'react-router-dom';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';

const Songs = () => {
  // axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("https://project-lyrics-projector-server.vercel.app/")
      .then((response) => {
        console.log(response.data.songs)
        // if(response.data.msg){
        //   alert(response.data.msg)
        // }
        setSongs(response.data.songs)
        setCurrSong(response.data.songs[0])
      }).
      catch((e) => {
        console.error(e)
      })
  }, [])

  const [songs, setSongs] = useState([])
  const [newSongs, setNewSongs] = useState([])
  const [currSong, setCurrSong] = useState({})
  const [query] = useOutletContext();

  useEffect(() => {
    setNewSongs([])
    const searchSongs = []
    console.log("query: ", query)
    songs.forEach((song) => {
      if ((song.enTitle).toLowerCase().includes(query.toLowerCase())) {
        searchSongs.push(song)
        console.log("title: ", song.enTitle)
      }
    })
    setNewSongs(searchSongs)
  }, [query])
  return (
    <div className='flex justify-center gap-10 h-[80%] px-4 py-4'>
      <div className='flex flex-col my-3 gap-2 overflow-auto h-full'>
        {songs.length > 0 ? (
          newSongs.length == 0 ? (
            <div>
              {songs.map((song, i) => {
                return (
                  <div key={song._id} className='flex' onClick={(e) => {
                    console.log(e.target.id);
                    setCurrSong(song)
                  }}>
                    <SongTab title={song.title} id={song._id} number={i + 1} />
                  </div>
                )
              })}
            </div>
          ) : <div>
            {newSongs.map((song, i) => {
              return (
                <div key={song._id} className='flex' onClick={(e) => {
                  console.log(e.target.id);
                  setCurrSong(song)
                }}>
                  <SongTab title={song.title} id={song._id} number={i + 1} />
                </div>
              )
            })}
          </div>
        ) : <div>No songs found</div>}


      </div>
      <div className='w-[600px] font-anektelugu text-white'>
        <div className='flex justify-start items-center gap-2 mb-4'>
          <h2 className='text-2xl mt-3'>{currSong.title}</h2>
          <div className='flex hover:bg-green-light rounded-sm w-6 h-6 justify-center items-center'>
            <NavLink to='/edit' state={{ song: currSong }} ><EditIcon fillColor={'#65a019'}></EditIcon></NavLink>
          </div>
        </div>
        <pre className='font-anektelugu overflow-auto h-full pb-4'>
          {currSong.content}
        </pre>
      </div>
    </div>
  )
}

export default Songs
