const mongoose = require ('mongoose');

const FoodSchema = mongoose.Schema({
    name: String,
    category: String,
    freshness: Number
});

//INITIALIZE THE MODEL
const Food = mongoose.model('Food', Foodschema);

module.exports = Food;
