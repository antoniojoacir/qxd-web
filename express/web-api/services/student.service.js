const students = require("../data/students")
const StudentModel = require('../models/student.model')

let id = students.length - 1

class StudentService {
    static list() {
        return students
    }

    static create(json) {
        const student =  new StudentModel(
            ++id,
            json.name,
            json.curse,
            json.ira
        )
        students.push(student)
        return student
    }
}

module.exports = StudentService