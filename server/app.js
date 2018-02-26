var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json())

var music = [
    {
        title: "Expanding Anyway",
        price: 25,
        img: 'expanding_anyway.jpg'
    },
    {
        title: "Salivating For Symbiosis",
        price: 25,
        img: 'salivating_for_symbiosis.jpg'
    }
]

var products = [
    {
        title: "Expanding Anyway Shirt (Grey)",
        price: 15
    },
    {
        title: "Expanding Anyway Shirt (Orange)",
        price: 15
    },
    {
        title: "Expanding Anyway Biker Tank",
        price: 15
    }
]

app.get('/api/music', function(req, res) {
    console.log("Getting music");
    res.json(music);
});

app.get('/api/products', function(req, res) {
    console.log("Getting products");
    res.json(products);
});

app.listen(7777);
console.log("App booted and listening on port 7777");
