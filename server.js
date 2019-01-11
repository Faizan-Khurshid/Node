// })
const express = require('express')
const app = express()
const mongoose = require("./config/db")

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected succesfully ")
});

//we cannot use import in node

app.listen(3000, () => {
    console.log("server connected to localhost")
})
//so that server always rum

app.use(express.json())
//so that we tell all post requests body will be of json format

app.use("/", require("./routes/index"))

// app.use("/userall", (request, response) => {
//     // console.log("This is users request");
//     response.send({name: "FAIZAM", email : "abcd@gmail.com"})
//     console.log("request.body", request.body)
// })

// // if we  need to listen at particlar request

// app.get("/get", (request, response) => {
//     // console.log("This is users request");
//     response.send({name: "FAIZAn", email : "abcd@gmail.com"})
//     console.log(request.query)

//to get the queries on request