const User = require('../models/User')

exports.editStaffForm = (req, res, next) =>{
    res.render('auth/edit-staff', )
}

exports.editStaff = async (req, res, next) =>{
    const {name, lastName} = req.body 
    await User.findByIdAndUpdate(req.user._id, {name, lastName})
    res.redirect('/staffprofile')
}

exports.createStudentForm = async (req,res,next)=>{
  res.render('auth/create-student')
}

exports.createStudent = async (req, res, next)=>{
  const newStudent = await User.register({...req.body}, req.body.password)
  console.log(newStudent)
  res.redirect('/staffprofile')
}

exports.deleteStudent= async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/staffprofile')
    
  }

  exports.inviteGuestForm = async (req, res, next) => {
    const guest = await Guest.find()
    res.render('auth/createGuest', {guest})
  }
  
  exports.inviteGuest = async (req, res, next) =>{
  const {name, email, date, person} = req.body
  await Guest.create({name, email, date, person})
  res.redirect('/staffprofile')
  }
  