const Guest = require('../models/Guest')


exports.editStudentForm = (req, res, next) =>{
  res.render('auth/edit-student', )
}

exports.editStudent = async (req, res, next) =>{
  const {name, lastName} = req.body 
  await User.findByIdAndUpdate(req.user._id, {name, lastName})
  res.redirect('/studentprofile')
}

exports.createGuestForm = async (req, res, next) => {
  const guest = await Guest.find()
  res.render('auth/createGuest', {guest})
}

exports.createGuest = async (req, res, next) =>{
const {name, email, fecha} = req.body
await Guest.create({name, email, fecha})
res.redirect('student-profile')
}

