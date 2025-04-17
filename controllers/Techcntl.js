const classmodel = require("../models/classmodel");
const classdetail = require("../models/classdetail");
const classdetailnon=require("../models/Classdetailnon");
const dumpnon=require("../models/Dumpnon");
const purchase=require("../models/Purchasemodel");
const dump=require("../models/Dump");
const purchasetech=require("../models/Purchasetech");

const addclass = async (req, res) => {
  try {
    const newclass = new classmodel(req.body);
    await newclass.save();
    res.status(200).send({
      success: true,
      message: "class added succesfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in adding class",
      error,
    });
  }
};

const getallclass = async (req, res) => {
  try {
    const allclass = await classmodel.find();
    res.status(200).send({
      success: true,
      data: allclass,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed to get classes",
      error,
    });
  }
};

const getclassdata = async (req, res) => {
  try {
    const classdata = await classmodel.findOne({ _id: req.body.classid });
    res.status(200).send({
      success: true,
      message: "data fetched",
      data: classdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching class details",
      error,
    });
  }
};

const editclass = async (req, res) => {
  try {
    const editclassdata = await classmodel.findOneAndUpdate(
      { _id: req.body.classid },
      req.body
    );
    // await editclassdata.save();
    res.status(200).send({
      success: true,
      message: "class edited",
      data: editclassdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in editing",
      error,
    });
  }
};

const deleteclass = async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await classmodel.deleteOne({ _id: id });
    //await deleted.save();
    res.status(200).send({
      success: true,
      message: "deleted",
      data: deleted,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "deletion failed",
    });
  }
};

const addclassdetail = async (req, res) => {
  try {
    const newclassdetail = await classdetail(req.body);
    await newclassdetail.save();

    res.status(200).send({
      success: true,
      message: "item added",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in saving details",
      error,
    });
  }
};

const addclassdetailnon = async (req, res) => {
  try {
    const newclassdetail = await classdetailnon(req.body);
    await newclassdetail.save();

    res.status(200).send({
      success: true,
      message: "item added",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in saving details",
      error,
    });
  }
};

const getclassdetails = async (req, res) => {
  try {
    const classdetails = await classdetail.find({ classid: req.body.classid });
    res.status(200).send({
      success: true,
      message: "all details get",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching details",
    });
  }
};

const getclassdetailsnon = async (req, res) => {
  try {
    const classdetails = await classdetailnon.find({ classid: req.body.classid });
    res.status(200).send({
      success: true,
      message: "all details get",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching details",
    });
  }
};

const deleteclassdetail = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedata = await classdetail.findOneAndDelete({ _id: id });
    const data={
      itemtype:deletedata.itemtype,
      deinstallationdate:new Date().toISOString(),
      description:(deletedata.desktopnumber?"Desktop Number : "+deletedata.desktopnumber+" ":" ")+ deletedata.description,
      roomtype:'class',
      roomid:deletedata.classid
    
    };
    await new dump(data).save();
    await new purchasetech({itemtype:deletedata.itemtype}).save();
    res.status(200).send({
      success: true,
      message: "detail deleted",
      
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in deletion",
    });
  }
};

const deleteclassdetailnontech= async (req, res) => {
  try {
    const { id } = req.body;
    const deletedata = await classdetailnon.findOneAndDelete({ _id: id });
    const data={
      itemtype:deletedata.itemtype,
      uid:deletedata.uid,
      deinstallationdate:new Date().toISOString(),
      description:deletedata.description,
      roomtype:'class',
      roomid:deletedata.classid
    
    };
    await new dumpnon(data).save();
    await new purchase({itemtype:deletedata.itemtype}).save();
   return  res.status(200).send({
      success: true,
      message: "detail deleted",
    
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in deletion",
    });
  }
};

const classdetailedit = async (req, res) => {
  try {
    const classdetails = await classdetail.findOne({
      _id: req.body.classdetailid,
    });
    res.status(200).send({
      success: true,
      message: "classdetail got",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "classdetail not found",
    });
  }
};

const editclassdetail = async (req, res) => {
  try {
    const editproduct = await classdetail.findOneAndUpdate(
      {
        _id: req.body.productid,
      },
      req.body
    );
    //const classprodut=await classta
    res.status(200).send({
      success: true,
      message: "edit successful",
      data: editproduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "edit unsuccessful",
      error,
    });
  }
};

const editclassdetailnon = async (req, res) => {
  try {
    const editproduct = await classdetailnon.findOneAndUpdate(
      {
        _id: req.body.classdetailid,
      },
      req.body
    );
    //const classprodut=await classta
    res.status(200).send({
      success: true,
      message: "edit successful",
      data: editproduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "edit unsuccessful",
      error,
    });
  }
};

const getclassdetaildatanon = async (req, res) => {
  try {
    const classdetails = await classdetailnon.findOne({
      _id: req.body.classdetailid,
    });
    res.status(200).send({
      success: true,
      message: "classdetail got",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "classdetail not found",
    });
  }
};

const getallclassdetails = async (req, res) => {
  try {
    const classdetails = await classdetail.find();
    res.status(200).send({
      success: true,
      message: "all details get",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching details",
    });
  }
};

const getallclassdetailsnon = async (req, res) => {
  try {
    const classdetails = await classdetailnon.find();
    res.status(200).send({
      success: true,
      message: "all details get",
      data: classdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching details",
    });
  }
};

module.exports = {
  addclass,
  getallclass,
  getclassdata,
  editclass,
  deleteclass,
  addclassdetail,
  getclassdetails,
  deleteclassdetail,
  classdetailedit,
  editclassdetail,
  getallclassdetails,
  addclassdetailnon,
  getclassdetailsnon,
  deleteclassdetailnontech,
  editclassdetailnon,
  getclassdetaildatanon,
  getallclassdetailsnon
};
