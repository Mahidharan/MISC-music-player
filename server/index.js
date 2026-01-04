const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/UserModel");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connected to MONGO DB Successfully");
  })
  .catch((err) => {
    console.error("Connection to MongoDB failed:", err.message);
  });

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  


  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();


    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: "Signup failed, please try again." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check_user = await User.findOne({ email: email });
    console.log(check_user);
    if (check_user.password === password) {
      const token=jwt.sign({email:check_user.email,userId:check_user._id},process.env.JWT_SECRET,{
        expiresIn:"1h"
      });
      return res.status(200).json({ message: "Login Successful",token });
      
      
    }

    console.log(check_email);  
  } catch (err) {
    console.log("unable to fetch user details");
    return res.status(500).json({ message: "internal server error" });
  }
});



app.post("/verify-token",async(req,res)=>{
  
const token=req.headers.authorization?.split(" ")[1];
if(!token){
  return res.status(403).json({"message":"access denied"});
}
try{
  const decoded=jwt.verify(token,process.env.JWT_SECRET);
  console.log(decoded);
  req.user=decoded;

  
  return res.status(200).json({"message":"token valid","user":"decoded",});

}
catch(err){
  return res.status(403).json({"message":"invalid or expired token"});
}
})

app.listen(process.env.PORT, () =>
  console.log("server is running in port 7777")
);
