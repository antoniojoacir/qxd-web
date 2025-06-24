var express = require('express');
var router = express.Router();

const StudentService = require("../services/student.service")

router.get('/list', (request, response) => {
    response.json(StudentService.list())
})

router.post('/create', (request, response) => {
    const student = StudentService.create(request.body)
    response.json(student)
})

module.exports = router