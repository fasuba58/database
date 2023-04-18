const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("this is my about page")
});

module.exports = router