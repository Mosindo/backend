const userModel= require("../models/user");
const config= require("../config")
const jwt = require('jsonwebtoken');

const verifyToken= async (req,res,next)=>{
    try {
        const token = req.headers.authorization;
        const result= jwt.verify(token.split(' ')[1], config.secret);
        const user = await userModel.findOne({
          _id:result.id
        }).exec();
        req.user = user;
        next();
      } catch (err) {
        res.status(401).send("Unauthorized ");
      }
};

// verifyToken = async(req, res, next) => {
//   let token = req.headers.authorization;

//   if (!token) {
//     return res.status(403).json({ message: "No token provided!" });
//   }

//   try {
//     const user = await userModel.findOne({
//       _id:result.id
//     }).exec();
//     const result = jwt.verify(token.split(' ')[1], config.secret);
//     req.user = result.id;
//     next();
//   } catch (err) {
//     res.status(401).send({ message: "Unauthorized!" })
//   }
// };

module.exports = verifyToken;