const fs = require('fs');
const path = require('path');   
const filePath = path.join(__dirname, '../storage/studentList.json');
const {createStudent} = require('../Models/studentModel')

exports.studentList = async(req, res) => {
    try {
        const data = fs.readFileSync(filePath,'utf8');
        res.send({status:200,data: JSON.parse(data)});
      } catch (err) {
        console.error(err)
      }
  
}

exports.createStudent = async(req, res) => {

    try {
        const data = fs.readFileSync(filePath,'utf8');
        const dataJson = JSON.parse(data);
        const newData = [...dataJson, createStudent(req.body) ];
        const newStudentList = JSON.stringify(newData);
        fs.writeFile(filePath, newStudentList, ()=>{});
        res.send({status:200,data:req.body, msg:"data added successfully"});
      } catch (err) {
        console.error(err)
      }
}