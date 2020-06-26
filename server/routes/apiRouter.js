const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'HI'
}))

//client -> post request to server
//userController.createUser - middleware that "posts"/inserts new user into user_info table
//responds with -> status/error
router.post('/register', userController.createUser, (req, res) => res.status(200).json({}));

module.exports = router;