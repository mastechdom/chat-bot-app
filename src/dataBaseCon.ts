let mysql = require("mysql");
let connData = {
    host : "localhost",
    user : "mas",
    password : "Mas@123",
    database : "chatbot",
};

function getConnection() {
    return mysql.createConnection(connData);
}

module.exports.getConnection = getConnection;