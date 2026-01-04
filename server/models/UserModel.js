const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const validator=require('validator');

const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:{
                validator:(value)=>{
                    validator.isEmail(value)},
                    message:"Invalid Email Format.",
                
            }
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        }
    }
)

const User=mongoose.model("User",userSchema)
module.exports= User;
