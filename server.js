require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const port=process.env.PORT || 3000;
const routes = require('./routes');

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
=======
app.use(express.json());
app.use('/api', routes); 
main

const app=express();
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Connectedto MongoDB'))
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
});

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the HomePage',
        database:mongoose.connection.readyState===1?'connected':'disconnected'
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});