
const {JsonDB, Config} = require ("node-json-db");
const assert = require("assert");
var db = new JsonDB(new Config("EDSA", true, false, '/'));
const signup_get = async (req, res)=>{
    return res.render("signup", {error:""});
};

const signup_post = async (req, res)=>{
  try {
    const {email, password, name, confirm_password} =req.body;
    const is_password_matched = assert.equal(password, confirm_password);
    console.log(is_password_matched);
    await db.push(`/${Date.now()}`, {
        email,
        password,
        name, 
        
    });
    return res.redirect("/auth/login");
  } catch (error) {
    console.log(error.message)
  }  
    
};

const login =  (req, res)=>{
    res.render("login", {error:""});
};

const login_post = async (req, res) => {
    const {email, password} = req.body;
    var data = await db.getData("/");
    const localDb = [];
    for (const user in data) {
        if (Object.hasOwnProperty.call(data, user)) {
            const element = data[user];
            localDb.push(element);
        }
    }  
    const user = await localDb.find((usr)=> usr.email===email);
    if (!user) return res.render("login", {error: "user does not exist"});
    if (user.password !==password) return res.render("login", {error: "incorrect password"});  
    return res.render("profile", {data:user});
    console.log(user); 
};

const profile =  (req, res)=>{
    return res.render("profile");
};

const index =(req, res)=>{
    res.render('index');
};

// const index1 =(req, res)=>{
//     res.render('index1');
// };

module.exports = {
    
    login,
    profile,
    index,
    signup_get,
    signup_post,
    login_post
};