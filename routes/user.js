const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("this is my also page")
});

module.exports = router