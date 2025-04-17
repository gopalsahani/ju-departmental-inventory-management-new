const servermodel=require("../models/Servermodel");
const serverdetail=require("../models/Serverdetail");
const serverdetailnon=require("../models/Serverdetailnon");
const dumpnon=require("../models/Dumpnon");
const purchase=require("../models/Purchasemodel");
const dump=require("../models/Dump");
const purchasetech=require("../models/Purchasetech");

const addserver=async(req,res)=>{
    try {
        const newlab = new servermodel(req.body);
        await newlab.save();
        res.status(200).send({
          success: true,
          message: "server added succesfully",
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "error in adding server",
          error,
        });
      }

};

const getallserver = async (req, res) => {
    try {
      const allserver = await servermodel.find();
      res.status(200).send({
        success: true,
        message:"server fetched",
        data: allserver,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "failed to get server",
        error,
      });
    }
  };

  
const deleteserver = async (req, res) => {
    try {
      const deleteserver= await servermodel.deleteOne({ _id: req.body.id });
      res.status(200).send({
        success: true,
        message: "server deleted ",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "fail to delete",
        error,
      });
    }
  };

  
const getserverdata = async (req, res) => {
    try {
      const serverdata = await servermodel.findOne({ _id: req.body.serverroomid });
  
      res.status(200).send({
        success: true,
        message: "server data fetched",
        data: serverdata,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "fail to fetch server data",
        error,
      });
    }
  };

  const updateserver=async(req,res)=>{
    try{
  const update=await servermodel.findOneAndUpdate({_id:req.body.serverroomid},req.body);
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

  const addserverdetail=async(req,res)=>{
    try{
    const newserverdetail=new serverdetail(req.body);
    await newserverdetail.save();
    res.status(200).send({
    success:true,
    message:"detail added"
    })
    }catch(error){
    res.status(500).send({
      success:false,
      message:"fail to add ",
      error
    })
    }
    };


    const addserverdetailnon=async(req,res)=>{
      try{
      const newserverdetail=new serverdetailnon(req.body);
      await newserverdetail.save();
      res.status(200).send({
      success:true,
      message:"detail added"
      })
      }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to add ",
        error
      })
      }
      };

    const getserverdetails=async(req,res)=>{
      try{
      const serverdetails=await  serverdetail.find({serverroomid:req.body.serverroomid});
      res.status(200).send({
        success:true,
        message:" details fetched",
        data:serverdetails
      }) 
      
      }catch(error){
      res.status(500).send({
        success:false,
        message:"failed to fetched",
        error
      })
      }
      };

      const getserverdetailsnon=async(req,res)=>{
        try{
        const serverdetails=await  serverdetailnon.find({serverroomid:req.body.serverroomid});
        res.status(200).send({
          success:true,
          message:" details fetched",
          data:serverdetails
        }) 
        
        }catch(error){
        res.status(500).send({
          success:false,
          message:"failed to fetched",
          error
        })
        }
        };

      const deleteserverdetail=async(req,res)=>{
        try{
       const deletedata= await serverdetail.findOneAndDelete({_id:req.body.id});
       const data={
        itemtype:deletedata.itemtype,
      
        deinstallationdate:new Date().toISOString(),
        description:(deletedata.desktopnumber?"Desktop Number : "+deletedata.desktopnumber+" ":" ")+ deletedata.description,
        roomtype:'server',
        roomid:deletedata.serverroomid
      
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

      const deleteserverdetailnon=async(req,res)=>{
        try{
        const deletedata=await serverdetailnon.findOneAndDelete({_id:req.body.id});
        const data={
          itemtype:deletedata.itemtype,
          uid:deletedata.uid,
          deinstallationdate:new Date().toISOString(),
          description:deletedata.description,
          roomtype:'server',
          roomid:deletedata.serverroomid
        
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

      const findserverdetail=async(req,res)=>{
        try{
      const serverdetails=await serverdetail.findOne({_id:req.body.serverdetailid});
      res.status(200).send({
        success:true,
        message:"fetched successful",
        data:serverdetails
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to fetch"
      })
        }
      };

      const findserverdetailnon=async(req,res)=>{
        try{
      const serverdetails=await serverdetailnon.findOne({_id:req.body.serverdetailid});
      res.status(200).send({
        success:true,
        message:"fetched successful",
        data:serverdetails
      });
        }catch(error){
      res.status(500).send({
        success:false,
        message:"fail to fetch"
      })
        }
      };

      
      const updateserverdetail=async(req,res)=>{
        try{
      const update=await  serverdetail.findOneAndUpdate({_id:req.body.serverdetailid},req.body);
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

      const updateserverdetailnon=async(req,res)=>{
        try{
      const update=await  serverdetailnon.findOneAndUpdate({_id:req.body.serverdetailid},req.body);
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

      const getallserverdetail = async (req, res) => {
        try {
          const allserver = await serverdetail.find();
          res.status(200).send({
            success: true,
            message:"server fetched",
            data: allserver,
          });
        } catch (error) {
          res.status(500).send({
            success: false,
            message: "failed to get server",
            error,
          });
        }
      };

      
      const getallserverdetailnon = async (req, res) => {
        try {
          const allserver = await serverdetailnon.find();
          res.status(200).send({
            success: true,
            message:"server fetched",
            data: allserver,
          });
        } catch (error) {
          res.status(500).send({
            success: false,
            message: "failed to get server",
            error,
          });
        }
      };
    

module.exports={addserver,getallserver,deleteserver,getserverdata,
  updateserver,addserverdetail,getserverdetails,
  deleteserverdetail,findserverdetail,updateserverdetail,getallserverdetail,
addserverdetailnon,getserverdetailsnon,deleteserverdetailnon,updateserverdetailnon,findserverdetailnon,getallserverdetailnon};
