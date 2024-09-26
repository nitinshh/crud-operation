const express=require("express")
const router=express.Router();
const controllers=require("../controllers/index")

router.post('/insert', controllers.userController.insert),
router.get('/getRecords', controllers.userController.getAllRecords),
router.patch('/updateSomeRecords', controllers.userController.updateSomeRecords),
router.put('/updateAllRecord',controllers.userController.updateAllRecords),
router.delete('/deleteRecord', controllers.userController.deleteRecords)

module.exports=router