const Router = require('express').Router()
const controller = require('../controllers/ClassController')

Router.get('/', controller.FindAllClasses)
Router.get('/:teacher_id', controller.FindAllClassesByTeacher)
Router.post('/:teacher_id', controller.CreateClass)
Router.put('/:class_id', controller.UpdateClass)
Router.delete('/:class_id', controller.DeleteClass)

module.exports = Router