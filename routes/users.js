const express = require("express")
const router = express.Router();

router.use("/getall/:id", (req, res) => {
    console.log("users se getall chal raha ha")
    console.log("res", req.params.id)
})

router.use("/add", () => {
    console.log("users se add all chal raha ha")
})

module.exports = router