const students = require("../data/students")


class StudentService {
    static list() {
        return students
    }
}

module.exports = StudentService