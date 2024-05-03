const fs = require("fs");
const path = require("path");

// Function to remove an image file
module.exports.removeImage = async (imageName, dirName) => {
  const imagePath = path.join("public", dirName, imageName);

  try {
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      // Delete the file
      await fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error removing file:", err);
          return;
        }
        console.log("File removed successfully:", imageName);
      });
    } else {
      throw new Error("File does not exist:", imageName);
    }
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: error.message });
  }
};
