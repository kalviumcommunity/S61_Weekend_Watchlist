const express = require("express");
const connectDB = require("./config/db");
const { MovieRoute } = require("./Route")
connectDB();

const app = express();
const port = 3001;

 Endpoint
app.get('/ping',(req,res) =>{
  try{
    return res.send('pong')
  }catch (error) {
    console.error('Error handling request:', error);
  }
})
app.get('/onemorepls',(req,res) =>{
  try{
    return res.send('onece moreee!!!')
  }catch (error) {
    console.error('Error handling request:', error);
  }
})
app.get('/opp',(req,res) =>{
  try{
    return res.send('onece moreee!!!')
  }catch (error) {
    console.error('Error handling request:', error);
  }
})

app.use(express.json());


app.use('/api', routes); 



app.get("/", (req, res) => {
  res.send("pong");
});

app.use("/api", MovieRoute);

app.listen(port, () => {
  console.log("Server is running");
});