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

server.get('/gallery/miniatures', (req, res) => res.render("pages/miniatures"));
server.get('/gallery/character_sketches', (req, res) => res.render("pages/character_sketches"));
server.get('/gallery/3D_models', (req, res) => res.render("pages/3D_models"));
server.get('/gallery/sigils', (req, res) => res.render("pages/sigils"));
server.get('/gallery/misc', (req, res) => res.render("pages/misc"));

server.listen(900);