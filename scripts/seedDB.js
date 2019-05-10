const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/phasergameplayers"
);

const userSeed = [
  {
    firstName: "Sally",
    lastName: "Beckwith",
    highScore: 20
  },
  {
    firstName: "Bryan",
    lastName: "Villatoro",
    highScore: 70
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
