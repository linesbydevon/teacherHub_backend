const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.get('/', controller.FindAllStudents);
Router.get('/:class_id', controller.FindAllStudentsByClass);
Router.post('/:class_id', controller.CreateStudent);
Router.put('/:student_id', controller.UpdateStudent);
Router.delete('/:student_id', controller.DeleteStudent);

module.exports = Router