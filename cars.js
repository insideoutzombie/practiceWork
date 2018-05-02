var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/car_app");

var carSchema = new mongoose.Schema({
  name: String,
  year: Number,
  make: String
});

var Car = mongoose.model("Car", carSchema);

// adding a new car to the DB
// var raceCars = new Car({
//   name: "WRXSTI",
//   year: 2017,
//   make: "Subaru"
// });
//
// raceCars.save(function(err, car){
//     if(err){
//       console.log("Something went wrong!");
//     } else {
//       console.log("We just saved a Car to the DB");
//       console.log(car);
//     }
// });

Car.create({
  name: "Supra",
  year: 1999,
  make: "Toyota"
}, function(err, car){
   if(err){
     console.log(err);
   } else {
     console.log(car);
   }
});

// retrieve all cars from the DB and console.log each one

Car.find({}, function(err, cars){
  if(err){
    console.log("Oh no, ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CARS......");
    console.log(cars);
  }
});
