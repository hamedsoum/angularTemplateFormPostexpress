const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello from server');
})

app.post('/enroll',(req,res)=>{
    console.log(req.body);
    res.status(401).send({"msg" : "Data requestes"});
})
app.listen(PORT, ()=>{
    console.log("server running on localhost:" + PORT);
})