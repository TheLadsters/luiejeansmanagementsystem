const router = require('express').Router();
const { registerUser, editName, editPassword, editRole, authUser, addTask, deleteTask } = require('../controllers/userControllers');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route("/").post(registerUser);
router.route("/editName").post(editName);
router.route("/editPassword").post(editPassword);
router.route("/editRole").post(editRole);
router.route("/login").post(authUser);
router.route("/addTask").post(addTask);    
router.route("/deleteTask").post(deleteTask); 
router.route('/add').post(registerUser);

module.exports = router