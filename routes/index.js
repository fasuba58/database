const express = require("express");
const router = express.Router();
const authController =require('../controllers/auth');


router.get('/', (req, res)=>{
    res.render('index');
});

module.exports = router;