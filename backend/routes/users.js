const router = require('express').Router();
const { registerUser, authUser } = require('../controllers/userControllers');
let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//     User.find()
//     .then(users=>res.json(users))
//     .catch(err=>res.status(400).json('Error: ' + err));
// });

router.route("/").post(registerUser);
router.route("/login").post(authUser);   

// router.route('/add').post((req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     const newUser = new User({email,password});
    

    

//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error' + err));
// });

module.exports = router;