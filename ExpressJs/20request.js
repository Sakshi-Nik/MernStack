const express = require('express');
const app = express();
app.get('/', (req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Path:", req.path);
    console.log("Host:", req.get('host'));
    console.log("Protocol:", req.protocol);

    res.send("Request Object Example");
});

app.listen(3000, () => {
    console.log("Server Started");
});