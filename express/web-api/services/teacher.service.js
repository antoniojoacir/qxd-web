const TeacherModel = require("../models/teacher.model");
const teachers = require("../data/teachers")

let id = 2

class TeacherService {
	static list() {
		return teachers
	}

	static create(teacherJson) {
		const newTeacher = new TeacherModel(
			++id,
			teacherJson.name,
			teacherJson.role,
			teacherJson.img
		)
		teachers.push(newTeacher)
		return newTeacher
	}

	static retrive(id) {
		for (let i = 0; i < teachers.length; i++) {
			if (teachers[i].id = id) {
				return teachers[i]
			}
		}
		return null
	}

	static edit(id, teacher) {
		for (let i = 0; 0 < teachers.length; i++) {
			if (teachers[i].id = id) {
				teachers[i].name = teacher.name
				teachers[i].role = teacher.role
				teachers[i].img = teacher.img
				return teachers[i]
			}
		}
		return null
	}

	static delete(id) {
		for(let i = 0; i < teachers.length; i++) {
			if(teachers[i].id == id) {
				teachers.splice(i, 1)
			}
		}
	}
}

module.exports = TeacherService;
