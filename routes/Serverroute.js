const express=require('express');
const { addserver, getallserver, deleteserver, getserverdata, updateserver, addserverdetail, getserverdetails, deleteserverdetail, findserverdetail, updateserverdetail, getallserverdetail, addserverdetailnon, getserverdetailsnon, deleteserverdetailnon, updateserverdetailnon, findserverdetailnon, getallserverdetailnon } = require('../controllers/Servercntl');
const authmiddleware = require('../middleware/authmiddleware');
const router=express.Router();


router.post("/addserver",addserver);
router.get("/getallserver",authmiddleware,getallserver);
router.post("/deleteserver",authmiddleware,deleteserver);
router.post("/getserverdata",authmiddleware,getserverdata);
router.post("/updateserver",authmiddleware,updateserver);
router.post("/addserverdetail",addserverdetail);
router.post("/getdetailofserver",authmiddleware,getserverdetails);
router.post("/deleteserverdetail",authmiddleware,deleteserverdetail);
router.post("/getserverdetailforedit",authmiddleware,findserverdetail);
router.post("/updateserverdetail",authmiddleware,updateserverdetail);
router.get("/getallserverroomdetails",authmiddleware,getallserverdetail);
//non tech
router.post("/addserverdetailnon",addserverdetailnon);
router.post("/getdetailofservernon",authmiddleware,getserverdetailsnon);
router.post("/deleteserverdetailnon",authmiddleware,deleteserverdetailnon);
router.post("/updateserverdetailnon",authmiddleware,updateserverdetailnon);
router.post("/getserverdetaildatanon",authmiddleware,findserverdetailnon);
router.get("/getallserverroomdetailsnon",authmiddleware,getallserverdetailnon);

module.exports=router;