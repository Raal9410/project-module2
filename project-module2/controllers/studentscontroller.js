const Guest = require('../models/Guest')


<<<<<<< HEAD
exports.editStudentForm = (req, res, next) =>{
  res.render('auth/edit-student', )
}

exports.editStudent = async (req, res, next) =>{
  const {name, lastName} = req.body 
  await User.findByIdAndUpdate(req.user._id, {name, lastName})
  res.redirect('/studentprofile')
}

exports.createguestForm = async (req, res, next) => {
=======
exports.createGuestForm = async (req, res, next) => {
>>>>>>> 7d81487977ec3fa1dbd666ba4371c20e3aa51014
  const guest = await Guest.find()
  res.render('auth/createGuest', {guest})
}

exports.createGuest = async (req, res, next) =>{
const {name, email, fecha} = req.body
await Guest.create({name, email, fecha})
res.redirect('student-profile')
}

