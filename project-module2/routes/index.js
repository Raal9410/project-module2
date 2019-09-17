const router = require('express').Router()
const passport = require('../handlers/passport')
const ensureLogin = require('connect-ensure-login')
const {catchErrors} = require('../middlewares/catchErrors')
const checkRole = require('../middlewares/checkRole')
const {login, loginForm, logout, profile, staffprofile} = require('../controllers/index.controller')
const {createUser, createUserForm, deleteUser} = require('../controllers/bosscontroller')
const {editStaffForm, editStaff, createCourseForm, createCourse, deleteCourse, editCourseForm, editCourse} = require('../controllers/staffcontroller')
const {createInvitation, invitationForm } = require('../controllers/studentscontroller')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/login', loginForm)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', checkRole('BOSS'), ensureLogin.ensureLoggedIn(), profile)
router.get('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), createUserForm)
router.post('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), catchErrors(createUser))
router.get('/delete-user/:id', ensureLogin.ensureLoggedIn(), checkRole('BOSS'), catchErrors(deleteUser))
router.get('/logout', logout)






router.get('/create-guest',checkRole('STAFF','STUDENT') createGuest)

module.exports = router;
