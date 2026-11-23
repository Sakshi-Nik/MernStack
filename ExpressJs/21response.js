
const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send("Hello Express.js");

});

app.get('/json', (req, res) => {
    res.json({name: "Sakshi", age: 21});
});

app.get('/end', (req, res) => {
    res.end("Response Ended");
});

app.listen(3000, () => {
    console.log("Server Started");
});


// Remember these five methods:
// Method	Purpose
// res.status()	Sets status code
// res.set()	Sets response header
// res.send()	Sends response
// res.json()	Sends JSON data
// res.end()	Ends response