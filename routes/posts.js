const express = require("express")
const router = express.Router();

router.use("/getAll", (req, res) => {
    console.log("posts se getall chal raha ha")
    console.log(req.body)
})

router.use("/add", () => {
    console.log("posts se add all chal raha ha")
})

module.exports = router