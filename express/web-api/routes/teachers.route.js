var express = require('express');
var router = express.Router();

const TeacherService = require("../services/teacher.service")
const { request } = require('../app')

router.get('/list', (request, response, next) => {
    response.json(TeacherService.list())
})

router.get('/create', (request, response) => {
    const teacherResponse = TeacherService.create(request.body)
    response.json(teacherResponse)
})

router.get('/retrive/:id', (request, response) => {
    const teacher = TeacherService.retrive(request.params.id)
    response.json(teacher)
})

router.put('/edit/:id', (request, response) => {
    const teacherMod = TeacherService.edit(
        request.params.id,
        request.body
    )
})

module.exports = router