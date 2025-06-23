var express = require('express');
var router = express.Router();

const StudentService = require("../services/student.service")

router.get('/list', (request, response) => {
    response.json(StudentService.list())
})

module.exports = router