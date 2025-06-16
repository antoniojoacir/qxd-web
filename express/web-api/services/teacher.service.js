const TeacherModel = require("../models/teacher.model");
const teachers = require("../data/teacher")

class TeacherService {
  static list() {
    return teachers
  }
}

module.exports = TeacherService;
