var express = require('express');
var router = express.Router();

const TeacherService = require("../services/teacher.service")

router.get('/list', (request, response) => {
	response.json(TeacherService.list())
})

router.get('/retrive/:id', (request, response) => {
	const teacher = TeacherService.retrive(request.params.id)
	response.json(teacher)
})

router.post('/create', (request, response) => {
	const teacherResponse = TeacherService.create(request.body)
	response.json(teacherResponse)
})


router.put('/edit/:id', (request, response) => {
	const teacherMod = TeacherService.edit(
		request.params.id,
		request.body
	)
	response.json(teacherMod)
})

router.delete('/delete/:id', (request, response) => {
	const res = TeacherService.delete(request.params.id)
	response.json({ "sucess": res })
})

module.exports = router
