const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//GET
app.get('/', (req, res) => {
   res.status(200).send('hello world!');
});

//GET req Simply sends the current time
app.get('/time', (req, res) => {
   let timeNow = Date(Date.now());
   res.status(200).send(timeNow.toString());
});

//POST req logs the name and sends it
//To check send a POST req with "name" and check your lambda function console
app.post('/logthis', (req, res) => {
   const name = req.body.name;
   const toLog = `\n >>> My name is ${name} <<< \n`
   console.info(toLog)
   res.status(200).send(toLog);
});

module.exports = app;