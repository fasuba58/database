const express = require("express");
const app = express();
const port = 5050;

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const aboutRouter = require("./routes/about");
const indexRouter = require('./routes/index');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/about", aboutRouter);
app.use('/index', indexRouter);



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
