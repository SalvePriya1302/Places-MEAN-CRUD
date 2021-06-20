const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const Place = require("./models/place");
const bodyParser = require('body-parser');

const app = express();
mongoose.connect("mongodb+srv://Priya:thatsgreat@cluster16.wjxsx.mongodb.net/angular?retryWrites=true&w=majority")

.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post('/api/places',bodyParser.json(), (req, res, next) => {
    
    const place = new Place({
    placename: req.body.placename,
    city: req.body.city,
    country: req.body.country

  });
  console.log('req is '+JSON.stringify(req.body));
  console.log('place is '+JSON.stringify(place));
  /* [
  {id: 'ffuhghkj',
   product: 'first',
   instock: '2',
   warehouse: 'pune'
  },
  {id: 'ghfdfg',
  product: 'second',
  instock: '2',
  warehouse: 'pune'
 }
  ]*/
  place.save();
  res.status(201).json({message:'Places added successfully',
 place: place
});

  });

app.get('/api/places',(req,res,next) =>{
  //res.send('welcome to my server');
  Place.find()
  .then(documents => {
    res.status(200).json(documents);

  });
});

app.delete('/api/places/:id',(req,res,next) =>{
  //res.send('welcome to my server');
  Place.deleteOne({_id:req.params.id}).then(result=>{
    console.log('after delete '+JSON.stringify(result));
    res.status(200).json({ message: "Deletion successful!" });
  })
  console.log("delete req for "+req.params.id);
 /* Place.find()
  .then(documents => {
    res.status(200).json(doc);

  });*/
});

app.get('/api/places/:id',(req,res,next) =>{
  //res.send('welcome to my server');
  Place.find({_id:req.params.id}).then(result=>{
    console.log('after gett '+JSON.stringify(result));
    res.status(200).json( result);
  })
});

app.put('/api/places/:id',bodyParser.json(),(req,res,next) =>{
  console.log("body update is "+JSON.stringify(req.body));
  Place.updateOne({_id:req.params.id}, req.body).then(result=>{
    console.log('after edit' + JSON.stringify(result));
    res.status(200).json({message: "Update Successful"});
  })
  console.log("edit req for "+req.params.id);

});


  module.exports = app;
