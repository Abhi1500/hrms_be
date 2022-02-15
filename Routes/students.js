const router = require("express").Router();
const studentController = require('../controllers/studentsController');

( function(){
    postRoutes();
    getRouters();
} )()


function postRoutes(){
 router.post("/create",studentController.createStudent);
  
  
}

function getRouters(){
router.get("/list",studentController.studentList);
}

module.exports = router;