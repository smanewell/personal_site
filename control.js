const express = require("express");
const server = express();

var fileSystem = require('fs');

server.use(express.static("public"));
server.use(express.json());
server.set("view engine", "ejs");

server.get('/', (req, res) => res.render("pages/index"));

server.get('/about', (req, res) => res.render("pages/about"));

server.get('/projects', (req, res) => res.render("pages/projects"));

server.get('/work_history', (req, res) => res.render("pages/work_history"));

server.get('/gallery', (req, res) => res.render("pages/gallery"));

server.get('/gallery/:category', (req, res) => {
    let category = req.params.category;

    let jsonString = fileSystem.readFileSync('./public/src/gallery_data.json');
    const galleryData = JSON.parse(jsonString);

    console.log(galleryData[category]);

    res.render("pages/gallery_category", {data: galleryData[category], category:category});
});

server.get('/gallery/:category/:page', (req, res) => {
    let category = req.params.category;
    let galleryItem = req.params.page.replace("_", " ");

    let jsonString = fileSystem.readFileSync('./public/src/gallery_data.json');
    const galleryData = JSON.parse(jsonString);

    res.render("pages/gallery_page", {data: galleryData[category], category:category, galleryItem: galleryItem});
});

server.listen(900);