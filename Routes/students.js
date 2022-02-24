const router = require("express").Router();
const studentController = require('../controllers/studentsController');
const { uploadImg, handleImg } = require('../Middlewares/multer');
( function(){
    postRoutes();
    getRouters();
    patchRoutes();
    deleteRouters();
} )()


function postRoutes(){
 router.post("/create",uploadImg('avatar'), handleImg, studentController.createStudent);
}

function patchRoutes() {
 router.patch("/update",uploadImg('avatar'), handleImg,studentController.updateStudent);  
}

function getRouters(){
router.get("/list",studentController.studentList);
}

function deleteRouters() {
router.delete("/delete",studentController.deleteStudent);
    
}

module.exports = router;