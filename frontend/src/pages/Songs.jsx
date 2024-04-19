import React, { useEffect, useState } from 'react'
import SongTab from './../components/SongTab';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const Songs = () => {

  useEffect(()=>{
    axios.get("http://localhost:2000")
    .then((response)=>{
      console.log(response.data.songs)
      setSongs(response.data.songs)
    })
  },[])

  const [songs,setSongs] = useState([])
  const [newSongs,setNewSongs] = useState([])
  const [currSong,setCurrSong] = useState({})
  const [query] = useOutletContext();

  useEffect(()=>{
    setNewSongs([])
    const searchSongs = []
    console.log("query: ",query)
    songs.forEach((song)=>{
      if((song.enTitle).toLowerCase().includes(query.toLowerCase())){
        searchSongs.push(song)
        console.log("title: ",song.enTitle)
      }
    })
    setNewSongs(searchSongs)
  },[query])
  return (
    <div className='flex justify-center gap-10 h-[80%]  px-4 py-8'>
      <div className='flex flex-col gap-2 overflow-scroll'>
          
          {songs.length>0?(
            newSongs.length==0?(
              <div>
              {songs.map((song,i)=>{
                return(
                  <div key={song._id}  className='flex' onClick={(e)=>{console.log(e.target.id);
                    setCurrSong(song)
                  }}>
                    <SongTab title={song.title} id={song._id} number={i+1} />
                  </div>
                )
              })}
            </div>
            ):<div>
            {newSongs.map((song,i)=>{
              return(
                <div key={song._id}  className='flex' onClick={(e)=>{console.log(e.target.id);
                  setCurrSong(song)
                }}>
                  <SongTab title={song.title} id={song._id} number={i+1} />
                </div>
              )
            })}
          </div>
          ): <div>No songs found</div>}
          {/* <button onClick={(e)=>{console.log(e.target.id)}}>
            <SongTab title='one' number='1' id ="1" ></SongTab>
          </button>
          <button onClick={(e)=>console.log(e.target.id)}>
            <SongTab title='two' number='1' id ="2" active='true'></SongTab>
          </button> */}


    </div>
    <div className='w-[600px] overflow-scroll font-anektelugu text-white'>
      <h2 className='text-2xl my-5'>{currSong.title}</h2>
      <pre className='font-anektelugu '>
      {currSong.content}
      </pre>
    </div>
    </div>
  )
}

export default Songs