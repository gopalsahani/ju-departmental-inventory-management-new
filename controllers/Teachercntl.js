const  teacher=require("../models/Teachermodel");
const teacherdetails=require("../models/Teacherdetail");
const teacherdetailsnon=require("../models/Teacherdetailnon")
const dumpnon=require("../models/Dumpnon");
const purchase=require("../models/Purchasemodel");
const dump=require("../models/Dump");
const purchasetech=require("../models/Purchasetech");


const addteacher= async (req, res) => {
    try {
      const newteacher = new teacher(req.body);
      await newteacher.save();
      res.status(200).send({
        success: true,
        message: "teacher added succesfully",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "error in adding lab",
        error,
      });
    }
  };

  const getallteacher = async (req, res) => {
    try {
      const teacherinfo = await teacher.find();
      res.status(200).send({
        success: true,
        message:"teachers fetched",
        data: teacherinfo,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "failed to get teacher details",
        error,
      });
    }
  };

  const deleteteacher = async (req, res) => {
    try {
      const deletedlab = await teacher.deleteOne({ _id: req.body.id });
      res.status(200).send({
        success: true,
        message: "teacher deleted ",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "fail to delete",
        error,
      });
    }
  };

  const getteacherdata = async (req, res) => {
    try {
      const teacherdata = await teacher.findOne({ _id: req.body.teacherid });
  
      res.status(200).send({
        success: true,
        message: "teacher data fetched",
        data: teacherdata,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "fail to fetch teacher data",
        error,
      });
    }
  };

  const editteacher = async (req, res) => {
    try {
      const editteacherdata = await teacher.findOneAndUpdate(
        { _id: req.body.teacherid },
        req.body
      );
      res.status(200).send({
        success: true,
        message: "updated successfully",
        data: editteacherdata,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "update failed",
        error,
      });
    }
  };

  const addteacherdetail=async(req,res)=>{
    try{
    const newteacherdetail=new teacherdetails(req.body);
    await newteacherdetail.save();
    res.status(200).send({
    success:true,
    message:"teacherdetail added"
    })
    }catch(error){
    res.status(500).send({
      success:false,
      message:"fail to add detail",
      error
    })
    }
    };

    const addteacherdetailnon=async(req,res)=>{
      try{
      const newteacherdetail=new teacherdetailsnon(req.body);
      await newteacherdetail.save();
      res.status(200).send({
      success:true,
      message:"teacherdetail added"
      })
      }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to add detail",
        error
      })
      }
      };

    const getteacherdetails=async(req,res)=>{
      try{
      const teacherdetail=await  teacherdetails.find({teacherid:req.body.teacherid});
      res.status(200).send({
        success:true,
        message:"teacher details fetched",
        data:teacherdetail
      }) 
      
      }catch(error){
      res.status(500).send({
        success:false,
        message:"failed to fetched",
        error
      })
      }
      };

      const getteacherdetailsnon=async(req,res)=>{
        try{
        const teacherdetail=await  teacherdetailsnon.find({teacherid:req.body.teacherid});
        res.status(200).send({
          success:true,
          message:"teacher details fetched",
          data:teacherdetail
        }) 
        
        }catch(error){
        res.status(500).send({
          success:false,
          message:"failed to fetched",
          error
        })
        }
        };
      const deleteteacherdetail=async(req,res)=>{
        try{
       const deletedata= await teacherdetails.findOneAndDelete({_id:req.body.id});
       const data={
        itemtype:deletedata.itemtype,
        deinstallationdate:new Date().toISOString(),
        description:(deletedata.desktopnumber?"Desktop Number : "+deletedata.desktopnumber+" ":" ")+ deletedata.description,
        roomtype:'teacher',
        roomid:deletedata.teacherid
      
      };
      await new dump(data).save();
      await new purchasetech({itemtype:deletedata.itemtype}).save();

        res.status(200).send({
      success:true,
      message:"delete succesful"
        });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to delete",
        error
      })
        }
      };
      const deleteteacherdetailnon=async(req,res)=>{
        try{
        const deletedata=await teacherdetailsnon.findOneAndDelete({_id:req.body.id});
        const data={
          itemtype:deletedata.itemtype,
          uid:deletedata.uid,
          deinstallationdate:new Date().toISOString(),
          description:deletedata.description,
          roomtype:'teacher',
          roomid:deletedata.teacherid
        
        };
        await new dumpnon(data).save();
        await new purchase({itemtype:deletedata.itemtype}).save();
        res.status(200).send({
      success:true,
      message:"delete succesful"
        });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to delete",
        error
      })
        }
      };

      const findteacherdetail=async(req,res)=>{
        try{
      const teacherdetail=await teacherdetails.findOne({_id:req.body.teacherdetailid});
      res.status(200).send({
        success:true,
        message:"fetched successful",
        data:teacherdetail
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to fetch"
      })
        }
      };
      const findteacherdetailnon=async(req,res)=>{
        try{
      const teacherdetail=await teacherdetailsnon.findOne({_id:req.body.teacherdetailid});
      res.status(200).send({
        success:true,
        message:"fetched successful",
        data:teacherdetail
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to fetch"
      })
        }
      };

      const updateteacherdetail=async(req,res)=>{
        try{
      const update=await teacherdetails.findOneAndUpdate({_id:req.body.teacherdetailid},req.body);
      res.status(200).send({
        success:true,
        message:"update successful"
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to update"
      })
        }
      };

      const updateteacherdetailnon=async(req,res)=>{
        try{
      const update=await teacherdetailsnon.findOneAndUpdate({_id:req.body.teacherdetailid},req.body);
      res.status(200).send({
        success:true,
        message:"update successful"
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to update"
      })
        }
      };

      
  const getallteacherdetails = async (req, res) => {
    try {
      const teacherinfo = await teacherdetails.find();
      res.status(200).send({
        success: true,
        message:"teachers fetched",
        data: teacherinfo,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "failed to get teacher details",
        error,
      });
    }
  };

  const getallteacherdetailsnon = async (req, res) => {
    try {
      const teacherinfo = await teacherdetailsnon.find();
      res.status(200).send({
        success: true,
        message:"teachers fetched",
        data: teacherinfo,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "failed to get teacher details",
        error,
      });
    }
  };
      

  module.exports={addteacher,getallteacher,deleteteacher,getallteacherdetailsnon,getteacherdata,editteacher,addteacherdetail,getteacherdetails,deleteteacherdetail,findteacherdetail,updateteacherdetail,getallteacherdetails,addteacherdetailnon,getteacherdetailsnon,deleteteacherdetailnon,findteacherdetailnon,updateteacherdetailnon};
