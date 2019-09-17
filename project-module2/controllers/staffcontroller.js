const User = require('../models/User')
const Student = require('../models/Student')

exports.editStaffForm = (req, res, next) =>{
    res.render('auth/edit-staff', )
}

exports.editStaff = async (req, res, next) =>{
    const {name, lastName} = req.body 
    await User.findByIdAndUpdate(req.user._id, {name, lastName})
    res.redirect('/staffprofile')
}

exports.createStudentForm = async (req,res,next)=>{
  const allStudents = await Student.find()
  res.render('auth/create-student', {allStudents})
}

exports.createStudent = async (req, res, next)=>{
  const newStudent = await Student.register({...req.body}, req.body.password)
  console.log(newStudent)
  res.redirect('/staffprofile')
}
exports.deleteStudent= async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    Student.redirect('/staffprofile')
    
  }

  exports.invitationForm = async (req, res, next) => {
    const guest = await Guest.find()
    res.render('auth/createGuest', {guest})
  }
  
  exports.createInvitation = async (req, res, next) =>{
  const {name, email, fecha} = req.body
  await Guest.create({name, email, fecha})
  res.redirect('student-profile')
  }
  