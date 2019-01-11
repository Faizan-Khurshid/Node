const express = require("express")
const router = express.Router();
const  Users = require("../model/users")

router.use("/getAll", (req, res) => {
    console.log("users se getall chal raha ha")
    console.log("req.params.id", req.params.name)
    // var name;
    // req.params.name == undefined ? name = null : name = undefined
    Users.find({})
    .then(result => res.send(result))
    .catch(e => res.send(e))
})

router.put("/updateAge", (req, res) => {
    console.log("updateAge chal raha ha")
    console.log("req.body", req.body)
    Users.update({ email : req.body.email}, { $set : { age : req.body.age } } )
})

router.delete("/removeUser", (req, res) => {
    console.log("remove age chal raha ha")
    console.log("req.body", req.body)
    Users.deleteOne({ "email" : req.body.email })
})

router.post("/add", (req, res) => {
    console.log("users se add all chal raha ha")
    const user = new Users(req.body)
    console.log("req.body", req.body)

    user.save()
    .then(() => res.send("user inserted Successfully"))
    .catch((e) => res.send("e",e))
})

module.exports = router