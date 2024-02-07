const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");

const { connectDB } = require("./db/index.js");
dotenv.config();
connectDB();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const userRouter = require("./routes/userRoutes.js");

app.use("/", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
