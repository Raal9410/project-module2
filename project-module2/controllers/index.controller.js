const User = require('../models/User')
exports.loginForm = (req, res, next) =>{
    res.render('auth/login',)
  }

exports.login = (req,res, next) => {
  if(req.user.role === 'BOSS'){
    res.redirect('/profile')
  } else if (req.user.role ==='STAFF'){
    res.redirect('/staffprofile')
  } else if (req.user.role === 'CHECKER'){ 
    res.redirect('/checkinvitations')
  }else if (req.user.role === 'STUDENT'){ 
    res.redirect('/studentprofile')
  }else{ 
    res.redirect('/login')
  }
}

exports.profile = async(req,res,next)=>{
  const boss = await User.findById(req.user._id)
  //const users = await User.find()
  const staff = await (User.find({role: 'STAFF'}))
  const checker = await (User.find({role: 'CHECKER'}))
  res.render('auth/profile', {boss, staff, checker}) //, {user: req.user}
}

exports.staffprofile = async(req,res,next)=>{
const staff = await User.findById(req.user._id)
const student = await User.find({role: 'STUDENT'})
res.render('auth/staffprofile', {staff, student}) //, {user: req.user}
}
exports.studentprofile = async(req,res,next)=>{
const student = await User.findById(req.user._id)
//const student = await User.find({role: 'STUDENT'})
res.render('auth/studentprofile', {student}) //, {user: req.user}
  }
exports.logout =(req, res, next)=>{
  req.logout()
  res.redirect('login')
}
