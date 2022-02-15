const router = require("express").Router();
const studentController = require('../controllers/studentsController');
const { uploadImg, handleImg } = require('../Middlewares/multer');
( function(){
    postRoutes();
    getRouters();
} )()


function postRoutes(){
 router.post("/create",uploadImg('avatar'), handleImg, studentController.createStudent);
  
  
}

function getRouters(){
router.get("/list",studentController.studentList);
}

module.exports = router;