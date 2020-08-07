var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var items = require("./models/user");

var Nany = items.Nany;
var User = items.User;
var User = items.User;
const cors = require("cors");
// const router = express.Router();
var Adminhandlers = require("./handlers/Adminhandlers");

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser("NannyApp"));

app.use(
  session({
    name: "session-id",
    secret: "SuraSession",
  })
);
var port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

require("dotenv").config(); // to read .env file

app.post("/AddAdmin", Adminhandlers.adminSignUp);
app.post("/adminLogin", Adminhandlers.adminLogIn);
app.post("/AddNanny", Adminhandlers.addNewNanny);
app.get("/Admin", Adminhandlers.retriveAllNanies);
app.delete("/Admin/:id", Adminhandlers.deleteSpecificNany);

const mongoURI = process.env.ATLAS_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
