var dotenv = require('dotenv').config();;
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
// var mongo = require('mongodb').MongoClient;
var app = express();

app.use(cors());
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_DB,
{auth: {
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASS
}}).then(() => console.log('connection successful!'))
.catch((err) => console.error(err));

var db = mongoose.connection;

var Product;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("we're connected!");
}).then((res) => {
    console.log("start");
    // Make item schema
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

    // Make item schema
    var tourdate = new Schema({
        id: Number,
        date: Date,
        city: String,
        state: String
    }, {collection: "tour-dates"});

    TourDate = mongoose.model('tour-date', tourdate);

    // Return all products
    TourDate.find({}, function(error,result) {
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

    Item.find({tag: "latestAlbum Album"}, function(error, result) {
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

    Item.find({type: /product|music/}, function(error, result) {
        if (error) {
            console.log(error);
            res.json();
        }
        console.log(result)
        res.json(result);
    });
});

app.get('/api/tourdates', function(req, res) {
    console.log("Getting Tour Dates");

    TourDate.find({}, function(error,result) {
        if (error) return console.error(error);
        res.json(result);
    });
});

app.listen(process.env.PORT || 7777);
console.log("App booted and listening on port ", (process.env.PORT || 7777));
