const express = require('express');

module.exports = function (server){
    //API routes
    const router = express.Router();
    server.use('/api', router)

    //toDo routes
    const toDoService = require('../api/toDo/toDoService')
    toDoService.register(router,'/todos')
}