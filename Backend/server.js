const express = require("express");
const connectDB = require("./config/db");
const { MovieRoute } = require("./Route");
const cors = require('cors');
const { MovieModel } = require("./models/movie.model");
connectDB();

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors())

app.get('/ping',(req,res) =>{
  try{
    return res.send('pong')
  }catch (error) {
    console.error('Error handling request:', error);
  }
})

app.get("/", (req, res) => {
  res.send("pong");
});


app.use("/api", MovieRoute);

app.get("/Movies",async(req,res)=>{
  try {
     const movie = await MovieModel.find();
     res.json(movie);
} catch (error) {
     console.error(error);
     res.status(500).send('Internal Server Error');
 }
 });



app.listen(port, () => {
  console.log("Server is running", port);
});