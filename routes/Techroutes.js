const express = require("express");
const {
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
  deleteclassdetailnon,
  editclassdetailnon,
  getclassdetaildatanon,
  getallclassdetailsnon,
  deleteclassdetailnontech,
} = require("../controllers/Techcntl");
const authmiddleware = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/addclass", addclass);
router.get("/getallclass", authmiddleware, getallclass);
router.post("/getclass", authmiddleware, getclassdata);
router.post("/editclass", authmiddleware, editclass);
router.post("/deleteclass", authmiddleware, deleteclass);
router.post("/addclassdetail", addclassdetail);
router.post("/getclassdetails", authmiddleware, getclassdetails);
router.get("/getallclassdetails", authmiddleware,getallclassdetails);
router.post("/deleteclassdetail", authmiddleware, deleteclassdetail);
router.post("/getclassdetailedit", authmiddleware, classdetailedit);
router.post("/editclassdetail", authmiddleware, editclassdetail);
//nontech
router.post("/addclassdetailnon", addclassdetailnon);
router.post("/getdetailofclassnon", authmiddleware, getclassdetailsnon);
router.post("/deleteclassdetailnon", authmiddleware,  deleteclassdetailnontech);
router.post("/updateclassdetailnon", authmiddleware,editclassdetailnon);
router.post("/getclassdetaildatanon", authmiddleware, getclassdetaildatanon);
router.get("/getallclassdetailsnon", authmiddleware,getallclassdetailsnon);

module.exports = router;
