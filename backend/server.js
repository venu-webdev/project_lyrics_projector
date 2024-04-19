const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./database.js')
const app = express();
const port = 2000;


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//connecting to mongoDb Cloud
db.connectDB()

//sort alpha order
function sortSongs(songs){
  let sortedData;
  
  sortedData = songs.sort(function(a,b){
    let x = a.enTitle.toLowerCase();
    let y = b.enTitle.toLowerCase();
    if(x>y){return 1;}
    if(x<y){return -1;}
    return 0;
  });

  return sortedData;
}

// get all songs from db
app.get("/", async (req,res)=>{

  let allSongs = await db.getAllSongs()

  if(allSongs.length == 0){
    return res.status(200).send({
      'msg':'No songs in Db',
      songs:[]
    })
  }

  return res.status(200).send({
    'msg':`${allSongs.length} songs found`,
    songs: sortSongs(allSongs)
  })
})

// search a song in db
app.post("/search", async (req,res)=>{

    let searchResults = await db.findSong(req.body.searchTerm)

    if( searchResults.length == 0 ){
      return res.send({
        'msg':`0 songs found`,
        songs:[]
      })
    }

    return res.send({msg:`${searchResults.length} songs found`,songs:sortSongs(searchResults)})

})


//adding a song to db
app.post("/song",async (req,res)=>{

  let addStatus = await db.addSong(req.body)

  if(!(addStatus)){
    return res.send({
      'msg':'Song already exists',
    })
  }

  return res.send({
    'msg':'Song successfully added',
    songs: sortSongs(addStatus)
  })
  
})

//editing a song
app.put("/song/:id",async (req,res)=>{
  // console.log("client: here you go: ",req.body.data)
  let response = await db.update_doc(req.params.id,req.body.data)
  let songs = await db.allSongs()
  // console.log("response after updating data: ",response)
  return res.json({
    songs: songs
  })
})

//get song by id
app.get("/song/:id",async (req,res)=>{
  // console.log("id: ",req.params.id,typeof(req.params.id))
})


app.delete("/delete/:id",async (req,res)=>{
  console.log("id: ",req.params.id,typeof(req.params.id))
  await db.delete_doc(req.params.id)
  let songs = await db.allSongs()
  return res.json({
    songs: songs
  })
})



app.listen(port, ()=>{
    console.log("server running on port ",port)
})
