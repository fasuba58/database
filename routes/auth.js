const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth")

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login);
router.post("/login", authController.login_post);

router.get("/profile", authController.profile);




console.log("MR SCOTT WANT TO KILL ME, GOD HELP ME")
// router.get("/", (req, res)=>{
//     res.send("this is my auth page")
// });

module.exports = router