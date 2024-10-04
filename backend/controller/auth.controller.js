import UserSchema from "../model/usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      msg: "User successfully registered",
      newUser,
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({
      msg: "Server error during user registration",
      error: error.message,
    });
  }
};


export const login = async(req,res)=>{
    const {email , password } = req.body;
    try {
     const user = await UserSchema.findOne({email});
     if(!user){
          return res.status(404).json({
            msg:"user not found",
            user
          })
     }
     const name = user.name;
     const isPassword = await bcrypt.compare(password, user.password);
     if(!isPassword){
        console.log("password not matched")
     }
     const token = jwt.sign(
        {email:user.email, _id:user._id},
        process.env.Jwttoken,
        {expiresIn:'24h'}
    ) 
     return res.status(200).json({
        success:"user sucessfully logedin",
        name,
        msg: "user is successfully login",
        token
     })
   } catch (error) {
      console.error("Error in user registration:", error);
      return res.status(500).json({
        msg: "Server error during user registration",
        error: error.message,
      });
    }
}


export const allUser = async(req,res)=>{
    
  
     const user = await UserSchema.find();
     if(!user){
          return res.status(404).json({
            msg:"user not found",
            user
          })
     }
  
     return res.status(200).json({
        user
     })

}