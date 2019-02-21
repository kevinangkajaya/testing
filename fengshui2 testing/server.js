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
        // console.log(result);
        res.send({
          title: result[0].Title,
          description: result[0].Description
        });
    });
    con.end();
  });
});

app.post('/dbconn/:number', (req, res) => {
  //   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  let number = req.params.number;
  // console.log((number));
    {
    // if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM sights where Number = ? limit 1",number, function (err, result, fields) {
        if (err) throw err;
        try{
          // console.log(result[0].Description);
          res.send({
            title: result[0].Title,
            description: result[0].Description
          });
        }
        catch(error){
          console.log("no result");
        }
    });
  }
});

app.get('/',(req,res)=>{
    
});
