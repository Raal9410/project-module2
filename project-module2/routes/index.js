const router = require('express').Router()
const passport = require('../handlers/passport')
const ensureLogin = require('connect-ensure-login')
const {catchErrors} = require('../middlewares/catchErrors')
const checkRole = require('../middlewares/checkRole')
const {login, loginForm, logout, profile, staffprofile} = require('../controllers/index.controller')

const {createUser, createUserForm, deleteUser} = require('../controllers/bosscontroller')
const {editStaffForm, editStaff, createStudentForm, createStudent} = require('../controllers/staffcontroller')
const {createGuestForm, createGuest} = require('../controllers/studentscontroller')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Boss routes
router.get('/login', loginForm)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', checkRole('BOSS'), ensureLogin.ensureLoggedIn(), profile)
router.get('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), createUserForm)
router.post('/create-staff',  ensureLogin.ensureLoggedIn(), checkRole('BOSS'), catchErrors(createUser))
router.get('/delete-user/:id', ensureLogin.ensureLoggedIn(), checkRole('BOSS'), catchErrors(deleteUser))

//Staff routes
router.get('/staffprofile', checkRole('STAFF'), ensureLogin.ensureLoggedIn(), staffprofile)
router.get('/edit-staff', checkRole('STAFF'), ensureLogin.ensureLoggedIn(), editStaffForm)
router.post('/edit-staff', checkRole('STAFF'), ensureLogin.ensureLoggedIn(), catchErrors(editStaff))


//Student routes


router.get('/logout', logout)
module.exports = router;




router.post("/create-guest", (req, res) => {
  const { password } = req.body;
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  const confirmationCode = token;

  const user = { ...req.body, confirmationCode };

  Student.(student, password)
    .then(data => {
      transporter.sendMail({
        from: "IRONBN <noreply@ironbnb.com>",
        to: data.email,
        subject: "Confirm Your Account at IRONBNB",

        text: `Hello ${data.username} 
          Please click here to confirm your IRONBNB account: 
          ${req.headers.origin}/auth/confirm/${data.confirmationCode}
          Thank you.`
      });
      res.render("email-sent", { data });
    })
    .catch(err => {
      res.render("auth-form", { err });
    });
});

router.get("/confirm/:confirmCode", (req, res) => {
  User.find({ confirmationCode: req.params.confirmCode }).then(user => {
    let id = user[0]._id;
    });
  });
});

