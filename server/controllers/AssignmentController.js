const {Assignment, Student} = require('../models');

const FindAllAssignments = async (req, res) => {
  try {
      const assignments = await Assignment.findAll()
      res.send(assignments)
  } catch (error) {
      throw error
  }

}

const FindAllAssignmentsByStudent = async (req,res) =>{
  try {
    let studentId = parseInt(req.params.student_id)
    const assignments = await Assignment.findAll({where:{studentId: studentId}});
    res.send(assignments)
  } catch (error) {
    throw error;
  }
}

const CreateAssignment = async (req,res)=>{
  try {
    const classId = parseInt(req.params.class_id);
    const students = await Student.findAll({where:{classId: classId}});
    students.forEach( async elem=>{
      let studentId = elem.id;
      let assignmentBody = {studentId:studentId, ...req.body};
      let assignment = await Assignment.create(assignmentBody)
    })
    res.send({msg: `Assignment added for ${students.length} students`})
  } catch (error) {
   throw error; 
  }
}

const UpdateAssignment = async (req, res) => {
  try {
      let assignmentId = parseInt(req.params.assignment_id)
      let updatedAssignment = await Assignment.update(req.body, {
          where: {id: assignmentId},
          returning: true
      })
      res.send(updatedAssignment)
  } catch (error) {
      throw error
  }
}

const DeleteAssignment = async (req,res)=>{
  try {
    let assignmentId = parseInt(req.params.assignment_id)
    let assignment = await Assignment.findAll({where:{id:assignmentId}});
    await Assignment.destroy({where:{id:assignmentId}})
    res.send({msg: `Deleted assignment ${assignment[0].name} with id of ${assignmentId}`})
  } catch (error) {
   throw error; 
  }
}

module.exports = {
  FindAllAssignments,
  FindAllAssignmentsByStudent,
  CreateAssignment,
  UpdateAssignment,
  DeleteAssignment
}