const express = require("express");
const server = express();

server.use(express.static("public"));
server.use(express.json());
server.set("view engine", "ejs");

server.get('/', (req, res) => res.render("pages/index"));

server.get('/about', (req, res) => res.render("pages/about"));

server.get('/projects', (req, res) => res.render("pages/projects"));

server.get('/work_history', (req, res) => res.render("pages/work_history"));

server.get('/gallery', (req, res) => res.render("pages/gallery"));

server.listen(900);