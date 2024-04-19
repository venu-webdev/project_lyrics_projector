const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

//connecting to db
function connectDB(){
    const url = String(process.env.MONGODB_URL);
    try {
      mongoose.connect(url);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
      console.log(`Database connected: ${url}`);
    });
   
    dbConnection.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });
    return;
}

//song schema
const songSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    enTitle:{
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true
    },

    date: { type: Date, default: Date.now },
});

const songModel = mongoose.model("song", songSchema);

//get all songs in db
async function getAllSongs(){
  const results = await songModel.find()
  return results
}

//find a song by search
async function findSong(searchTerm){
    const foundSongs = await songModel.find( {$or:[{'title':{ '$regex' : searchTerm, '$options' : 'i' }},{'enTitle':{'$regex': searchTerm, '$options': 'i'}}, {'content':{ '$regex' : searchTerm, '$options' : 'i' }}]})
    return foundSongs
}


async function addSong({title,content,enTitle}){

    if((await findWithTitle(title.trim())).length !=0){
      return 0
    }

    await songModel.create({

      title: title.trim(),
      content: content,
      enTitle: enTitle.trim()
      
    })
    .catch(error => {
      console.error(error);
    });

    return await getAllSongs()
  }
  
  
async function findWithTitle(searchTerm){
    
  return await songModel.find( {$or:[{'title':searchTerm}, {'enTitle':searchTerm}]}).catch(err=>{
    console.error(err);
  })

}

async function findSongById(id){
  const foundSong = await songModel.find({_id: id})
  console.log("----->foundSong: ", foundSong)
  return foundSong
}

async function update_doc(id, {title,content}){
  const foundSong = await songModel.updateOne({_id: id}, {title:title,content:content})
  console.log("----->foundSong: ", foundSong.modifiedCount)
  console.log("updated the song!")
  return foundSong
}


async function delete_doc(id){
  const deleteStatus = await songModel.deleteOne({_id:id})
  console.log("---->DeleteoneStatus: ",deleteStatus)
  return deleteStatus
}

module.exports={
    connectDB, songModel, addSong, findSong, getAllSongs,update_doc,delete_doc
}
  