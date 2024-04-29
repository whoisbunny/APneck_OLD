const jwt = require("jsonwebtoken");
const USER = require("../models/user");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await USER.findById(decoded?.userId);
          if (!user) throw new Error("Invalid token") 
        req.user = user;

        next();
      } else {
        return res
          .status(404)
          .json({ message: "Not authorized Token expired " });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(400).json({ message: "There is no authorization token " });
  }
};

const isAdmin = async (req, res, next) => {

  try {
    
    
    const id = req?.user?._id;
    const adminUser = await USER.findOne({ _id: id });
    

    if (adminUser?.isAdmin !== true) {
      throw new Error("You are not Administrator");
    } else {
      next();
    }
  } catch (error) {
              return res.status(500).json({ message: error.message });

  }
};
module.exports = { authMiddleware, isAdmin };
