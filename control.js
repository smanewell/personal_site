const express = require("express");
const server = express();


server.use(express.static("public"));
server.use(express.json());
server.set("view engine", "ejs");

server.get('/', (req, res) => res.render("pages/index"));

server.get('/about', (req, res) => res.render("./about.html"));

server.listen(900);