const { Cohort } = require("../models")


const FindAllClasses = async (req, res) => {
    try {
        const classes = await Cohort.findAll()
        res.send(classes)
    } catch (error) {
        throw error
    }

}


const CreateClass = async (req, res) => {
    try {
        const teacherId = parseInt(req.params.teacher_id)
        const teacherBody = {teacherId, ...req.body}
        const newClass = await Cohort.create(teacherBody)
        res.send(newClass)
    }
    catch (error) {
        throw error
    }
}


const UpdateClass = async (req, res) => {
    try {
        let classId = parseInt(req.params.class_id)
        let updatedClass = await Cohort.update(req.body, {
            where: {id: classId},
            returning: true
        })
        res.send(updatedClass)
    } catch (error) {
        throw error
    }
}

const DeleteClass = async (req, res) => {
    try {
        let classId = parseInt(req.params.class_id)
        let cohort = await Cohort.findAll({where:{id:classId}});
        await Cohort.destroy({where:{id:classId}})
        res.send({msg: `Deleted class ${cohort[0].name} with id of ${classId}`})
    } catch (error) {
    throw error  
    }
}









module.exports = {
    CreateClass,
    FindAllClasses,
    UpdateClass,
    DeleteClass
}