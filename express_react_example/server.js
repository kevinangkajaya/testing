const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const con = require("./demo_db_connection.js");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/dbconn', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM sights", function (err, result, fields) {
        if (err) throw err;
        // console.log(description);
        res.send({result: result});
    });
  });
});

app.get('/',(req,res)=>{
    
});
