const {Student} = require('../models');

const FindAllStudents = async (req, res) => {
  try {
      const students = await Student.findAll()
      res.send(students)
  } catch (error) {
      throw error
  }

}

const FindAllStudentsByClass = async (req,res) =>{
  try {
    let classId = parseInt(req.params.class_id)
    const students = await Student.findAll({where:{classId: classId}});
    res.send(students)
  } catch (error) {
    throw error;
  }
}

const CreateStudent = async (req,res)=>{
  try {
    const classId = parseInt(req.params.class_id)
    const studentBody = {classId:classId, ...req.body}
    const newStudent = await Student.create(studentBody)
    res.send(newStudent)
  } catch (error) {
   throw error; 
  }
}

const UpdateStudent = async (req, res) => {
  try {
      let studentId = parseInt(req.params.student_id)
      let updatedStudent = await Student.update(req.body, {
          where: {id: studentId},
          returning: true
      })
      res.send(updatedStudent)
  } catch (error) {
      throw error
  }
}

const DeleteStudent = async (req,res)=>{
  try {
    let studentId = parseInt(req.params.student_id)
    let student = await Student.findAll({where:{id:studentId}});
    await Student.destroy({where:{id:studentId}})
    res.send({msg: `Deleted student ${student[0].firstName} ${student[0].lastName} with id of ${studentId}`})
  } catch (error) {
   throw error; 
  }
}

module.exports = {
  FindAllStudents,
  FindAllStudentsByClass,
  CreateStudent,
  UpdateStudent,
  DeleteStudent
}