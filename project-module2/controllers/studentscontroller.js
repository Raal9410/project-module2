const Guest = require('../models/Guest')


<<<<<<< HEAD
exports.guestForm = async (req, res, next) => {
=======
exports.invitationForm = async (req, res, next) => {
>>>>>>> f51f6b8e3fcde41245bb3e5f45b693e3358f94dc
  const guest = await Guest.find()
  res.render('auth/createGuest', {guest})
}

exports.createGuest = async (req, res, next) =>{
const {name, email, fecha} = req.body
await Guest.create({name, email, fecha})
<<<<<<< HEAD
res.redirect('create-guest')
=======
res.redirect('student-profile')
>>>>>>> f51f6b8e3fcde41245bb3e5f45b693e3358f94dc
}

