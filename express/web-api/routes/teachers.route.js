var express = require('express');
var router = express.Router();

const TeacherService = require("../services/teacher.service")

router.get('/list', (resquest, response, next) => {
    response.json(TeacherService.list())
})

module.exports = router