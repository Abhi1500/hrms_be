const router = require("express").Router();
const studentController = require('../controllers/studentsController');
const { uploadImg, handleImg } = require('../Middlewares/multer');
( function(){
    postRoutes();
    getRouters();
    patchRoutes();
} )()


function postRoutes(){
 router.post("/create",uploadImg('avatar'), handleImg, studentController.createStudent);
}

function patchRoutes() {
 router.patch("/update",studentController.updateStudent);  
}

function getRouters(){
router.get("/list",studentController.studentList);
router.get("/delete",studentController.deleteStudent);
}

module.exports = router;