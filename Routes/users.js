const router = require("express").Router();
const userController = require('../controllers/userControllers');

( function(){
    postRoutes();
    getRouters();
})()


function postRoutes(){
 router.post("/signup",userController.signup);
router.post("/signin",userController.signin);

}

function getRouters(){

}

module.exports = router;