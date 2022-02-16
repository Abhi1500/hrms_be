const { signup } = require('../Models/signupModel');
const btoa = require('btoa');
const atob = require('atob');
const fs = require('fs');
const path = require('path');  
const { v4: uuidv4 } = require('uuid');  
const filePath = path.join(__dirname, '../storage/users.json');

exports.signup = async(req, res) => {

    try {
        const data = fs.readFileSync(filePath,'utf8');
        const dataJson = JSON.parse(data);
        req.body.id = uuidv4();
        const newData = [...dataJson, signup(req.body) ];
        const newUserList = JSON.stringify(newData);
        fs.writeFile(filePath, newUserList, ()=>{});
        res.send({status:200,data:req.body, msg:"Signup successfully"});
      } catch (err) {
        console.error(err)
      }
}

exports.signin = async(req, res) => {
    try {
        const data = fs.readFileSync(filePath,'utf8');
        const dataJson = JSON.parse(data);
        const record = dataJson.find((rec)=>(rec.email == req.body.email && rec.password == req.body.password));
        record.token = record ? btoa(JSON.stringify(record)) : res.send({status:401, msg:"Unauthorized User"});;
        res.send({status:200,data:record, msg:"Loggedin successfully"});
      } catch (err) {
        console.error(err)
      }
}