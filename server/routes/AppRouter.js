const Router = require("express").Router()
const TeacherRouter = require("./TeacherRouter")
const ClassRouter = require("./ClassRouter")
const StudentRouter = require("./StudentRouter")
const AssignmentRouter = require("./AssignmentRouter")
const AuthRouter = require("./AuthRouter")

Router.use("/teachers",TeacherRouter)
Router.use("/classes",ClassRouter)
// Router.use("/students",StudentRouter)
// Router.use("/assignments",AssignmentRouter)

module.exports = Router
