console.log("Web Serverni Boshlash");
const { clear } = require("console");
const express = require("express");
const app = express();
const http = require("http");

//1:  Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3:  Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.get("/", function (req, res) {
  res.and("HELLO WORLD");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running seccessfully on port: ${PORT}`);
});
