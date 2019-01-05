const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("server connected to localhost")
})

//so that server always rum

app.use("/user", (request, response) => {
    // console.log("This is users request");
    response.send({name: "FAIZAM", email : "abcd@kgmail.com"})
})
