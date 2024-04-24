const mongoose= require("mongoose");
const bcrypt = require("bcrypt");


const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});


// Validate the schema before save
// userSchema.pre('save', async function (next){

//     if(!this.isModified('password')){
//         next();
//     }
//     const salt = await bcrypt.genSaltSync(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     // console.log(password , salt) ;
// });


// // Validate the schema after creating the model // save the schema
// userSchema.methods.isPasswordMatch = async function(enterPassword){
//     return await bcrypt.compare(enterPassword , this.password )
// }

// userSchema.methods.createPasswordResetToken = async function(){
//     const resetToken = await crypto.randomBytes(32).toString("hex")
//     this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')      
//     this.passwordResetExpires = Date.now() + 30*60*100 // 10 minutes
//     return resetToken
// }
const USER =  mongoose.model("users", userSchema);

module.exports =USER;
