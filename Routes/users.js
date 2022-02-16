const router = require("express").Router();
const userController = require('../controllers/userControllers');

( function(){
    postRoutes();
    getRouters();
})()


function postRoutes(){
 router.post("/signup",userController.signup);
}

function getRouters(){
router.get("/signin",userController.signin);
}

module.exports = router;