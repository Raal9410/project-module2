const Guest = require('../models/Guest')


exports.guestForm = async (req, res, next) => {
  const guest = await Guest.find()
  res.render('auth/createGuest', {guest})
}

exports.createGuest = async (req, res, next) =>{
const {name, email, fecha} = req.body
await Guest.create({name, email, fecha})
res.redirect('create-guest')
}

