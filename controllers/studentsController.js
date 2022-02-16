const fs = require('fs');
const path = require('path');  
const { v4: uuidv4 } = require('uuid'); 
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
        req.body.id = uuidv4();
        const newData = [...dataJson, createStudent(req.body) ];
        const newStudentList = JSON.stringify(newData);
        fs.writeFile(filePath, newStudentList, ()=>{});
        res.send({status:200,data:req.body, msg:"data added successfully"});
      } catch (err) {
        console.error(err)
      }
}

exports.updateStudent = async(req, res) => {

  try {
      const data = fs.readFileSync(filePath,'utf8');
      const dataJson = data ? JSON.parse(data) : [];
      let index = dataJson.findIndex(({id})=> id == req.body.id);
      dataJson[index] = req.body;
      fs.writeFile(filePath, JSON.stringify(dataJson), ()=>{});
      res.send({status:200,data:req.body, msg:"data updated successfully"});
    } catch (err) {
      console.error(err)
    }
}

exports.deleteStudent = async(req, res) => {

  try {
      const data = fs.readFileSync(filePath,'utf8');
      const dataJson = data ? JSON.parse(data) : [];
      const index = dataJson.findIndex(({id})=> id = req.params.id);
      dataJson.splice(index,1);
      fs.writeFile(filePath, JSON.stringify(dataJson), ()=>{});
      res.send({status:200, msg:"student deleted successfully"});
    } catch (err) {
      console.error(err)
    }
}