const User = require('../models/User')

exports.editStaffForm = (req, res, next) =>{
    res.render('auth/edit-staff', )
}

exports.editStaff = async (req, res, next) =>{
    const {name, lastName} = req.body 
    await User.findByIdAndUpdate(req.user._id, {name, lastName})
    res.redirect('/staffprofile')
}

exports.createStudentForm = (req,res,next)=>{
  res.render('auth/createStudent')
}

exports.createStudent = async (req, res, next)=>{
  const newStudent = await User.register({...req.body}, req.body.password)
  console.log()
  res.redirect('/staffprofile')
}
exports.deleteStudent= async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/staffprofile')
    
  }