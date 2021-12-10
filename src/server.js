let express = require("express");
let app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, , authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}`));

let { messagesData } = require("./messagesData.ts");
let { getConnection } = require("./dataBaseCon.ts");


app.get("/messages", function(req, res) {
    let connection = getConnection();
    let sql = "SELECT * FROM messages";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/messages", function(req,res){
    let body = req.body;
    let connection = getConnection();
    let sql = "INSERT INTO messages(text,sender,time,date) VALUES(?,?,?,?)";
    connection.query(sql,[body.text,body.sender,body.time,body.date],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else{
            res.send(body);
        }
    });
});

// app.get("/test", function(req, res) {
//     res.send("test respond mmm");
// })
// app.get("/messages", function(req, res) {
//     console.log("Hi")
//     res.send(messagesData);
// })
// app.post("/messages", function(req, res){
//     let body = req.body;
//     messagesData.push(body);
//     res.send(body);
// })