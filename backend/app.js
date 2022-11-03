const express = require('express');
// const client = require('./db.js');

// client.connect();

// client.query('select * from pass', (err,pass) => {
//     if(!err)
//     {
//         console.log(pass.rows);
//     }
//     client.end()
// });
const app = express();

app.get("/post", (req, res) => {
    console.log("Connected to React");
    res.send("lol");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));