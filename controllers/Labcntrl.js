const labdetails = require("../models/Labdetail");
const labmodel = require("../models/Labmodel");
const labdetailsnon = require("../models/Labdetailnon");
const dumpnon = require("../models/Dumpnon");
const purchase = require("../models/Purchasemodel");
const dump=require("../models/Dump");
const purchasetech=require("../models/Purchasetech");

const addlab = async (req, res) => {
  try {
    const newlab = new labmodel(req.body);
    await newlab.save();
    res.status(200).send({
      success: true,
      message: "teacher added succesfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in adding teacher",
      error,
    });
  }
};

const getalllabs = async (req, res) => {
  try {
    const alllabs = await labmodel.find();
    res.status(200).send({
      success: true,
      message: "labs fetched",
      data: alllabs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed to get labs",
      error,
    });
  }
};

const deletelab = async (req, res) => {
  try {
    const deletedlab = await labmodel.deleteOne({ _id: req.body.id });
    res.status(200).send({
      success: true,
      message: "lab deleted ",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const getlabdata = async (req, res) => {
  try {
    const labdata = await labmodel.findOne({ _id: req.body.labid });

    res.status(200).send({
      success: true,
      message: "lab data fetched",
      data: labdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetch lab data",
      error,
    });
  }
};

const editlab = async (req, res) => {
  try {
    const editlabdata = await labmodel.findOneAndUpdate(
      { _id: req.body.labid },
      req.body
    );
    res.status(200).send({
      success: true,
      message: "updated successfully",
      data: editlabdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "update failed",
      error,
    });
  }
};

const addlabdetail = async (req, res) => {
  try {
    const newlabdetail = new labdetails(req.body);
    await newlabdetail.save();
    res.status(200).send({
      success: true,
      message: "labdetail added",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to add detail",
      error,
    });
  }
};

const addlabdetailnon = async (req, res) => {
  try {
    const newlabdetail = new labdetailsnon(req.body);
    await newlabdetail.save();
    res.status(200).send({
      success: true,
      message: "labdetail added",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to add detail",
      error,
    });
  }
};

const getlabdetails = async (req, res) => {
  try {
    const labdetail = await labdetails.find({ labid: req.body.labid });
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: labdetail,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed to fetched",
      error,
    });
  }
};

const getlabdetailoflabnon = async (req, res) => {
  try {
    const labdetail = await labdetailsnon.find({ labid: req.body.labid });
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: labdetail,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed to fetched",
      error,
    });
  }
};

const deletelabdetail = async (req, res) => {
  try {
   const deletedata= await labdetails.findOneAndDelete({ _id: req.body.id });
   const data = {
    itemtype: deletedata.itemtype,
    
    deinstallationdate: new Date().toISOString(),
    description:(deletedata.desktopnumber?"Desktop Number : "+deletedata.desktopnumber+" ":" ")+ deletedata.description,

    roomtype: "lab",
    roomid: deletedata.labid,
  };
  await new dump(data).save();
  await new purchasetech({ itemtype: deletedata.itemtype }).save();
    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletelabdetailnon = async (req, res) => {
  try {
    const deletedata = await labdetailsnon.findOneAndDelete({
      _id: req.body.id,
    });
    const data = {
      itemtype: deletedata.itemtype,
      uid: deletedata.uid,
      deinstallationdate: new Date().toISOString(),
      description: deletedata.description,
      roomtype: "lab",
      roomid: deletedata.labid,
    };
    await new dumpnon(data).save();
    await new purchase({ itemtype: deletedata.itemtype }).save();
    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const findlabdetail = async (req, res) => {
  try {
    const labdetail = await labdetails.findOne({ _id: req.body.labdetailid });
    res.status(200).send({
      success: true,
      message: "fetched successful",
      data: labdetail,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetch",
    });
  }
};

const findlabdetailnon = async (req, res) => {
  try {
    const labdetail = await labdetailsnon.findOne({
      _id: req.body.labdetailid,
    });
    res.status(200).send({
      success: true,
      message: "fetched successful",
      data: labdetail,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetch",
    });
  }
};

const updatedetail = async (req, res) => {
  try {
    const update = await labdetails.findOneAndUpdate(
      { _id: req.body.labdetailid },
      req.body
    );
    res.status(200).send({
      success: true,
      message: "update successful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to update",
    });
  }
};

const updatelabdetailnons = async (req, res) => {
  try {
    const update = await labdetailsnon.findOneAndUpdate(
      { _id: req.body.labdetailid },
      req.body
    );
    res.status(200).send({
      success: true,
      message: "update successful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to update",
    });
  }
};

const alllabdetails = async (req, res) => {
  try {
    const ldetails = await labdetails.find();
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: ldetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetched",
      error,
    });
  }
};

const alllabdetailsnon = async (req, res) => {
  try {
    const ldetails = await labdetailsnon.find();
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: ldetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetched",
      error,
    });
  }
};

const alldumpdata = async (req, res) => {
  try {
    const ldetails = await dumpnon.find();
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: ldetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetched",
      error,
    });
  }
};

const alldumpdatatech = async (req, res) => {
  try {
    const ldetails = await dump.find();
    res.status(200).send({
      success: true,
      message: "lab details fetched",
      data: ldetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to fetched",
      error,
    });
  }
};

const deleteonedumpdata = async (req, res) => {
  try {
    const deletedata = await dumpnon.findOneAndDelete({ _id: req.body.id });

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deleteonedumpdatatech = async (req, res) => {
  try {
    const deletedata = await dump.findOneAndDelete({ _id: req.body.id });

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletedumpdata = async (req, res) => {
  try {
    const { item } = req.body;
    if (item === "all") {
      await dumpnon.deleteMany({});
    } else {
      await dumpnon.deleteMany({ itemtype: item });
    }

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletedumpdatatech = async (req, res) => {
  try {
    const { item } = req.body;
    if (item === "all") {
      await dump.deleteMany({});
    } else {
      await dump.deleteMany({ itemtype: item });
    }

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};


const getallpurchasedata = async (req, res) => {
  try {
    const summary = await purchase.aggregate([
      { $group: { _id: "$itemtype", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).send({
      success: true,
      message: "succesful",
      data: summary,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail  ",
      error,
    });
  }
};

const getallpurchasedatatech= async (req, res) => {
  try {
    const summary = await purchasetech.aggregate([
      { $group: { _id: "$itemtype", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).send({
      success: true,
      message: "succesful",
      data: summary,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail  ",
      error,
    });
  }
};

const deletepurchase = async (req, res) => {
  try {
    const { item } = req.body;

    await purchase.deleteMany({ itemtype: item });

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletepurchasetech = async (req, res) => {
  try {
    const { item } = req.body;

    await purchasetech.deleteMany({ itemtype: item });

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletepartial = async (req, res) => {
  try {
    const { item, count } = req.body;

    const items = await purchase.find({ itemtype: item });

if(items.length===0){
  return res.status(404).send({
    success:false,
    message:"item not found"
  })
};

    if (count > items.length) {
      return res.status(400).send({
        success: false,
        message: "not enough item to delete",
      });
    };

    for(let i=0;i<count;i++){
      await purchase.findOneAndDelete({_id:items[i]._id});
    }

   return  res.status(200).send({
      success: true,
      message: "update successful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to update",
      error,
    });
  }
};

const deletepartialtech = async (req, res) => {
  try {
    const { item, count } = req.body;

    const items = await purchasetech.find({ itemtype: item });

if(items.length===0){
  return res.status(404).send({
    success:false,
    message:"item not found"
  })
};

    if (count > items.length) {
      return res.status(400).send({
        success: false,
        message: "not enough item to delete",
      });
    };

    for(let i=0;i<count;i++){
      await purchasetech.findOneAndDelete({_id:items[i]._id});
    }

   return  res.status(200).send({
      success: true,
      message: "update successful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to update",
      error,
    });
  }
};

const deletelisttech = async (req, res) => {
  try {
     

    await purchasetech.deleteMany({});

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};

const deletelist = async (req, res) => {
  try {
     

    await purchase.deleteMany({});

    res.status(200).send({
      success: true,
      message: "delete succesful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "fail to delete",
      error,
    });
  }
};
module.exports = {
  addlab,
  getalllabs,
  deletelab,
  getlabdata,
  editlab,
  addlabdetail,
  getlabdetails,
  deletelabdetail,
  findlabdetail,
  updatedetail,
  alllabdetails,
  addlabdetailnon,
  getlabdetailoflabnon,
  deletelabdetailnon,
  updatelabdetailnons,
  findlabdetailnon,
  alllabdetailsnon,
  alldumpdata,
  deleteonedumpdata,
  deletedumpdata,
  getallpurchasedata,
  getallpurchasedatatech,
  deletepurchase,
  deletepurchasetech,
  deletepartial,
  deletelist,
  alldumpdatatech,
  deleteonedumpdatatech,
  deletedumpdatatech,
  deletepartialtech,
  deletelisttech
};
