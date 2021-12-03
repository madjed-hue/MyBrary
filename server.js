if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./.env" });
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("connected to mongoose");
});

app.listen(process.env.PORT || 3000);
