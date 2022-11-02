const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const validatePosts = require("./middlewares/validatePosts");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const newUserController = require("./controllers/newUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const storeUserController = require("./controllers/storeUser");

const app = new express();

app.use(fileUpload());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/posts/store", validatePosts);
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb+srv://fsprogadmn:4FBoKlOfKHWL1iC2@cluster0.tlbwcrv.mongodb.net/fall22?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const port = 4000;

app.get("/", homeController);

app.get("/auth/register", newUserController);

app.post("/users/register", storeUserController);

app.get("/auth/login", loginController);

app.get("/post/:id", getPostController);

app.get("/posts/new", newPostController);

app.post("/posts/store", storePostController);

app.post("/users/login", loginUserController);

app.listen(port, () => {
  console.log("App Listening on Port " + port);
});
