require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/connectDb");
app.use(morgan("dev"));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));
// Load environment variables
const PORT = process.env.PORT ;
const cartRoutes = require("./routes/cartRoute");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");


app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", ["*"]);
//   res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });


app.get("/api/", (req, res) => {
  res.send("Hello, server Connected");
});



app.use("/api/product", productRoutes);
app.use("/api/auth", userRoute);
app.use("/api/category", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);






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
