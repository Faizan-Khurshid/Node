const express = require("express")
const router = express.Router();

router.use("/getall", () => {
    console.log("posts se getall chal raha ha")
})

router.use("/add", () => {
    console.log("posts se add all chal raha ha")
})

module.exports = router