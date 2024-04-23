require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/connectDb");
app.use(morgan("dev"));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));
// Load environment variables
const PORT = process.env.PORT ;

app.get("/api/", (req, res) => {
  res.send("Hello, server Connected");
});


// Connect to MongoDB and start the server
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

start();
