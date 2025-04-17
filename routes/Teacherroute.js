const express = require("express");
const { addteacher, getallteacher, deleteteacher, getteacherdata, editteacher, addteacherdetail, getteacherdetails, deleteteacherdetail, findteacherdetail, updateteacherdetail, getallteacherdetails, addteacherdetailnon, getteacherdetailsnon, deleteteacherdetailnon, findteacherdetailnon, updateteacherdetailnon, getallteacherdetailsnon } = require("../controllers/Teachercntl");
const authmiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/addteacher",addteacher);
router.get("/getallteacher",authmiddleware,getallteacher);
router.post("/deleteteacher",authmiddleware,deleteteacher);
router.post("/getteacherdata",authmiddleware,getteacherdata);
router.post("/editteacher",authmiddleware,editteacher);
router.post("/addteacherdetail",addteacherdetail);
router.post("/getdetailofteacher",authmiddleware,getteacherdetails);
router.post("/deleteteacherdetail",authmiddleware,deleteteacherdetail);
router.post("/getteacherdetaildata",authmiddleware,findteacherdetail);
router.post("/updateteacherdetail",authmiddleware,updateteacherdetail);
router.get("/getallteacherdetails",authmiddleware,getallteacherdetails);
 //nontech
 router.post("/addteacherdetailnon",addteacherdetailnon);
 router.post("/getdetailofteachernon",authmiddleware,getteacherdetailsnon);
 router.post("/deleteteacherdetailnon",authmiddleware,deleteteacherdetailnon);
 router.post("/getteacherdetaildatanon",authmiddleware,findteacherdetailnon);
 router.post("/updateteacherdetailnon",authmiddleware,updateteacherdetailnon);
 router.get("/getallteacherdetailsnon",authmiddleware,getallteacherdetailsnon);




module.exports = router;