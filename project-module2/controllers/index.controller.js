const User = require('../models/User')
exports.loginForm = (req, res, next) => {
  res.render('auth/login')
}

exports.login = (req, res, next) => {
  if (req.user.role === 'BOSS') {
    res.redirect('/profile')
  } else if (req.user.role === 'STAFF') {
    res.redirect('/staffprofile')
  } else if (req.user.role === 'CHECKER') {
    res.redirect('/checkinvitations')
  } else if (req.user.role === 'STUDENT') {
    res.redirect('/studentprofile')
  } else {
    res.redirect('/login')
  }
}

exports.profile = async (req, res, next) => {
  const boss = await User.findById(req.user._id)
  res.render('auth/profile', { boss }) //, {user: req.user}
}

exports.staffprofile = async (req, res, next) => {
  const staff = await User.findById(req.user._id)
  //const allCourses = await Course.find()
  res.render('auth/staffprofile', { staff }) //, {user: req.user}
}

exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('login')
}
