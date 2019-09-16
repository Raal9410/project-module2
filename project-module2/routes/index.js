const router = require('express').Router()
const passport = require('../handlers/passport')
const ensureLogin = require('connect-ensure-login')
//const catchErrors = require('../middlewares/catchErrors')
const checkRole = require('../middlewares/checkRole')
const {login, loginForm, logout, profile, staffprofile} = require('../controllers/index.controller')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/login', loginForm)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', checkRole('BOSS'), ensureLogin.ensureLoggedIn(), profile)
//router.get('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), createUserForm)
//router.post('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), createUser)
//router.get('/delete-user/:id', ensureLogin.ensureLoggedIn(), checkRole('BOSS'), deleteUser)
router.get('/logout', logout)
module.exports = router;
