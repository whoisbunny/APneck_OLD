const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, require: false },
  
});

const CATEGORY = mongoose.model("Category", categorySchema);

module.exports = CATEGORY;
