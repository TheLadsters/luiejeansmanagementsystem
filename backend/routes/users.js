const router = require('express').Router();
const { registerUser, authUser, addTaskUser } = require('../controllers/userControllers');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/addTask").post(addTaskUser);    

router.route('/add').post(registerUser);

module.exports = router;