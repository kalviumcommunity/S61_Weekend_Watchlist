const express = require('express');
const app = express();

app.get('/ping',(req,res) =>{
  try{
    return res.send('pong')
  }catch (error) {
    console.error('Error handling request:', error);
  }
})

app.listen(3000,() =>{
    console.log(`server running on port 3000`)
});

