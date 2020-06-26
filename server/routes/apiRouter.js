const express = require('express');
const userController = require('../Controllers/userController');
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'HI'
}))

//client -> post request to server
//userController.createUser - middleware that "posts"/inserts new user into user_info table
//responds with -> status/error
router.post('/register', userController.createUser, (req, res) => {
  console.log("Successful post to database.");
  console.log("res.body: ", res.body);
  return res.status(200).json({})
});

module.exports = router;