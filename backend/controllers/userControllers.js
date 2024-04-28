const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
// const expressAsyncHandler = require("express-async-handler");

const registerUser =async(req,res)=>{
    try{
    const {name,email,password,pic} = req.body
    if(!name || !email || !password){
        res.status(400).json({msg:"Please Enter all the Fields"});
        throw new Error("Please Enter all the Fields")
    }

    const userExists = await User.findOne({email});
    if(userExists){
         res.status(400).json({msg:"User already exists"});
        throw new Error("User already exists")
    }

    const user = await User.create({ 
        name,email,password,pic:pic
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    } else {
        res.status(400).json({msg:"Failed to create the user"});
        throw new Error("Failed to Create the User")
    }
} catch(err){
    res.status(400).json({msg:err.message})
    console.log("error-------------",err.message);
}
}


const authUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)

        })
    } else {
        res.status(400).json({msg:"Invalid email or password"});
        throw new Error("Invalid email or password")
    }
})

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
          //$options:"i" means caseinsensitive  , $regex-->like to includes to filter data in mongodb
        ],
      }
    : {};
                                                     //$ne--not equal to 
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});


module.exports = {registerUser,authUser,allUsers}