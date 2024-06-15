const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const user = require('./Clientside')



app.post("/register" , async (req , resp)=>{
    let data =  new user(req.body);
    let result =await data.save();
    console.log("Connected");
    resp.send(result);
})

app.listen(5000);