const mongoose = require("mongoose")

const foodItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    featured:{
      type:  Boolean,
      default:false
    },
    image_urls:[String]
});

module.exports = mongoose.model("FoodItem",foodItemSchema)