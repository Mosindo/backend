const mongoose =require ("mongoose");

const userSchema =new mongoose.Schema({
email:{type:String, unique:true},
password:String,
firstName :String,
surName: String,
dateOfBirth: String

})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;