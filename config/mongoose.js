const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://manish79:123321@backend.iawy5ig.mongodb.net/hospital", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to MongoDB"));

db.once("open", () => console.log("Successfully connected to MongoDB"));

module.exports = db;
