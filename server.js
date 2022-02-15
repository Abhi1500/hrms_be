const express = require('express')
const server_app = express();
const cors = require('cors');
const usersRouter = require('./Routes/users');
const studentsRouter = require('./Routes/students');

function initilize_function() {
    // configDataBase();
    configCoresPolicy();
    configBodyParser();
    setRouters();
    error404Handeler();
    errorHandler();
}
initilize_function();


function configCoresPolicy() {
    server_app.use(cors())
}

function configBodyParser() {
    server_app.use(express.urlencoded({extended: true}));
    server_app.use(express.json())
}


function setRouters() {
    server_app.use('/user', usersRouter)
    server_app.use('/students', studentsRouter)
}

function error404Handeler() {
    server_app.use((req, res) => {
        res.status(404).json({
            msg: 'NOT FOUND',
            status: 404
        })
    })
}

function errorHandler() {
    server_app.use((err, req, res, next) => {
        res.status(500).json({
            msg: err.message || "Something went wrong. Please try again later",
            status: 500
        })
    })
}

module.exports = server_app