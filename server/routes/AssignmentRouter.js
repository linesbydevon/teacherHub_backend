const Router = require('express').Router()
const controller = require('../controllers/AssignmentController')


Router.get('/:student_id', controller.FindAllAssignmentsByStudent);
Router.post('/:class_id', controller.CreateAssignment);
Router.put('/:assignment_id', controller.UpdateAssignment);
Router.delete('/:assignment_id', controller.DeleteAssignment);
Router.get('/', controller.FindAllAssignments);

module.exports = Router