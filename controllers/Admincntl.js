const adminmodel = require("../models/adminmodel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const registercntl = async (req, res) => {
  try {
    const existadmin = await adminmodel.findOne({ email: req.body.email });
    if (existadmin) {
      return res.status(200).send({
        success: false,
        message: "email already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = newpassword;
    const newadmin = new adminmodel(req.body);
    await newadmin.save();
    return res.status(200).send({
      success: true,
      message: "register successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "registration failed",
    });
  }
};

const logincntl = async (req, res) => {
  try {
    const admin = await adminmodel.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(200).send({
        success: false,
        message: "user does not exist",
      });
    }

    const ismatch = await bcrypt.compare(req.body.password, admin.password);
    if (!ismatch) {
      return res.status(200).send({
        success: false,
        message: "invalid email or password",
      });
    }

    const token = await JWT.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password, ...adminWithoutPassword } = admin.toObject();

    return res.status(200).send({
      success: true,
      message: "login successful",
      admin:adminWithoutPassword,
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "login failed",
    });
  }
};

const getalluser=async(req,res)=>{
try{
const users=await adminmodel.find().select("-password").skip(1);
//const {password,...otherdata}=users.toObject();
res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
res.setHeader('Pragma', 'no-cache');
res.setHeader('Expires', '0');
res.setHeader('Surrogate-Control', 'no-store');
return res.status(200).json({
  success:true,
  message:"all users got",
  data:users
});
}catch(error)
{ 
res.status(500).json({
  success:false,
  message:"fail to get users",
  error
})
}
};

const updaterole=async(req,res)=>{
  try{
const updateuser=await adminmodel.findByIdAndUpdate(req.body.id,{role:req.body.role});
res.status(200).send({
  success:true,
  message:"updated successful"
});
  }catch(error){
    res.status(500).send({
      success:false,
      message:"fail to update",
      error
    })
  }
};

module.exports = { registercntl, logincntl,getalluser,updaterole };
