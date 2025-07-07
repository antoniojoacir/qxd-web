const students = require("../data/students")
const StudentModel = require('../models/student.model')

let id = students.length - 1

class StudentService {
	static list() {
		return students
	}

	static create(json) {
		const student = new StudentModel(
			++id,
			json.name,
			json.curse,
			json.ira
		)
		students.push(student)
		return student
	}

	static edit(id, json) {
		for (let i = 0; i < students.length; i++) {
			if (students[i].id == id) {
				students[i].name = json.name
				students[i].curse = json.curse
				students[i].ira = json.ira
				return students[i]
			}
		}
		return null
	}

	static retrive(id) {
		for (let i = 0; i < students.length; i++)
			if (students[i].id == id)
				return students[i]
		return null
	}

	static delet(id) {
		for (let i = 0; i < students.length; i++) {
			if (students[i].id == id) {
				students.splice(i, 1)
				return true
			}
		}
		return false
	}
}

module.exports = StudentService
