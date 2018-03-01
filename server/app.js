var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
// var mongo = require('mongodb').MongoClient;
var app = express();

app.use(cors());
app.use(bodyParser.json())

// var uri = "mongodb+srv://reader:wTqePYzFOo9JzKa7@cluster0-9npfp.mongodb.net/test";
// mongoose.connect('mongodb+srv://reader:wTqePYzFOo9JzKa7@cluster0-9npfp.mongodb.net/react-project?authSource=admin');
mongoose.connect('mongodb://reader:wTqePYzFOo9JzKa7@cluster0-shard-00-00-9npfp.mongodb.net:27017,cluster0-shard-00-01-9npfp.mongodb.net:27017,cluster0-shard-00-02-9npfp.mongodb.net:27017/react-project?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("we're connected!");
}).then((res) => {
    console.log("start");
    var productSchema = new Schema({
        productId: Number,
        tilte: String,
        price: Number,
        img: String,
        type: String
    }, { collection: "items"});

    var Product = mongoose.model('Product', productSchema);

    // Return all products
    Product.find({}, function(error,result) {
        if (error) return console.error(error);
        console.log(result);
    });

    console.log("done");

});

// mongo.connect(uri, function(err, client) {
//     const collection = client.db("test").collection("devices");
//     console.log(collection);
//     client.close();
// })


var latestAlbum = {
    productId: 2,
    title: "Salivating For Symbiosis",
    price: 25,
    img: 'salivating_for_symbiosis.jpg'
}


var music = [
    {
        productId: 1,
        title: "Expanding Anyway",
        price: 25,
        img: 'expanding_anyway.jpg'
    },
    latestAlbum
]

var products = [
    {
        productId: 3,
        title: "Expanding Anyway Shirt (Grey)",
        price: 15,
        img: ''
    },
    {
        productId: 4,
        title: "Expanding Anyway Shirt (Orange)",
        price: 15,
        img: ''
    },
    {
        productId: 5,
        title: "Expanding Anyway Biker Tank",
        price: 15,
        img: ''
    }
]

app.get('/api/item/:itemId', function(req, res) {
    console.log("Getting music");
    res.json(music);
});

app.get('/api/music', function(req, res) {
    console.log("Getting music");
    res.json(music);
});

app.get('/api/latestAlbum', function(req, res) {
    console.log("Getting latestAlbum");
    res.json(latestAlbum);
});

app.get('/api/products', function(req, res) {
    console.log("Getting products");
    res.json(products);
});

app.listen(7777);
console.log("App booted and listening on port 7777");
