const express = require("express");

const authmiddleware = require("../middleware/authmiddleware");
const {
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
  updatelabdetailnon,
  updatelabdetailnons,
  findlabdetailnon,
  alllabdetailsnon,
  alldumpdata,
  deleteonedumpdata,
  deletedumpdata,
  getallpurchasedata,
  deletepurchase,
  deletepartial,
  deletelist,
  alldumpdatatech,
  deleteonedumpdatatech,
  deletedumpdatatech,
  getallpurchasedatatech,
  deletepurchasetech,
  deletepartialtech,
  deletelisttech,
   
} = require("../controllers/Labcntrl");

const router = express.Router();

router.post("/addlab", addlab);
router.get("/getalllabs", authmiddleware, getalllabs);
router.post("/deletelab", authmiddleware, deletelab);
router.post("/getlabdata", authmiddleware, getlabdata);
router.post("/editlab", authmiddleware, editlab);
router.post("/addlabdetail",addlabdetail);
router.post("/getdetailoflab",authmiddleware,getlabdetails)
router.post("/deletelabdetail",authmiddleware,deletelabdetail)
router.post("/getlabdetailforedit",authmiddleware,findlabdetail )
router.post("/updatedetail",authmiddleware,updatedetail)
router.get("/alllabs",authmiddleware,getalllabs);
router.get("/labdetails",authmiddleware,alllabdetails)
//non tech
router.post("/addlabdetailnon",addlabdetailnon);
router.post("/getdetailoflabnon",authmiddleware,getlabdetailoflabnon );
router.post("/deletelabdetailnon",authmiddleware,deletelabdetailnon);
router.post("/updatelabdetailnon",authmiddleware,updatelabdetailnons);
router.post("/getlabdetaildatanon",authmiddleware,findlabdetailnon);
router.get("/labdetailsnon",authmiddleware,alllabdetailsnon);
//dump
router.get("/getalldumpdata",authmiddleware,alldumpdata);
router.post("/deleteonedumpdata",authmiddleware,deleteonedumpdata);
router.post("/deletedata",authmiddleware,deletedumpdata);
//dump tech
router.get("/getalldumpdatatech",authmiddleware,alldumpdatatech);
router.post("/deleteonedumpdatatech",authmiddleware,deleteonedumpdatatech);
router.post("/deletedatatech",authmiddleware,deletedumpdatatech);
//purchase
router.get("/getallpurchasedata",authmiddleware,getallpurchasedata);
router.post("/deletepurchase",authmiddleware,deletepurchase);
router.post("/deletepartial",authmiddleware,deletepartial);
router.post("/deletelist",authmiddleware,deletelist);
//puchase tech
router.get("/getallpurchasedatatech",authmiddleware,getallpurchasedatatech);
router.post("/deletepurchasetech",authmiddleware,deletepurchasetech);
router.post("/deletepartialtech",authmiddleware,deletepartialtech);
router.post("/deletelisttech",authmiddleware,deletelisttech);

module.exports = router;
