const Invitado = require('../models/Invitado')


exports.invitationForm = async (req, res, next) => {
  const invitado = await Invitado.find()
  res.render('auth/createInvitado', {invitado})
}

exports.createInvitation = async (req, res, next) =>{
const {name, email, fecha} = req.body
await Invitado.create({name, email, fecha})
res.redirect('create-invitado')
}

