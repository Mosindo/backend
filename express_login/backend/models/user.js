const mongoose =require ("mongoose");

const userSchema =new mongoose.Schema({
email:{type:String, unique:true},
password:String,
confirmPassword:String,
// userName:{type:String, unique:true},
firstName :String,
surname: String,
dateOfBirth: String
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;