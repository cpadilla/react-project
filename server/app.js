var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var dotenv = require('dotenv').config();;
// var mongo = require('mongodb').MongoClient;
var app = express();

app.use(cors());
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_DB);

var db = mongoose.connection;

var Product;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("we're connected!");
}).then((res) => {
    console.log("start");
    var item = new Schema({
        productId: Number,
        tilte: String,
        price: Number,
        img: String,
        type: String,
        tag: String
    }, {collection: "items"});

    Item = mongoose.model('item', item);

    // Return all products
    Item.find({}, function(error,result) {
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


// API

app.get('/api/item/:itemId', function(req, res) {
    console.log("Getting item: " + req.params.itemId);
    // res.json(music);

    Item.find({productId: req.params.itemId}, function(error, result) {
        if (error) {
            console.log(error);
            res.json();
        }
        console.log(result);
        res.json(result);
    });
});

app.get('/api/music', function(req, res) {
    console.log("Getting music");
    // res.json(music);

    Item.find({type: "music"}, function(error, result) {
        if (error) {
            console.log(error);
            res.json();
        }
        res.json(result);
    });

});

app.get('/api/latestAlbum', function(req, res) {
    console.log("Getting latestAlbum");
    // res.json(latestAlbum);

    Item.find({tag: "latestAlbum"}, function(error, result) {
        if (error) {
            console.log(error);
            res.json();
        }
        console.log(result)
        res.json(result);
    });
});

app.get('/api/products', function(req, res) {
    console.log("Getting products");
    // res.json(products);
});

app.listen(7777);
console.log("App booted and listening on port 7777");
