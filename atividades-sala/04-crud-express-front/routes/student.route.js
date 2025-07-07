var express = require('express');
var router = express.Router();

const StudentService = require("../services/student.service")

router.get('/list', (request, response) => {
	response.json(StudentService.list())
})

router.get('/retrive/:id', (request, response) => {
	const student = StudentService.retrive(
		request.params.id
	)
	response.json(student)
})

router.post('/create', (request, response) => {
	const student = StudentService.create(
		request.body
	)
	response.json(student)
})

router.put('/edit/:id', (request, response) => {
	const student = StudentService.edit(
		request.params.id,
		request.body
	)
	response.json(student)
})

router.delete('/delete/:id', (request, response) => {
	const res = StudentService.delet(
		request.params.id
	)
	response.json(
		{ "Sucesso": res }
	)
})

module.exports = router
