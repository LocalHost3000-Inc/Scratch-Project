const express = require('express');
const userController = require('../Controllers/userController');
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'HI'
}))

//client -> post request to server
//userController.createUser - middleware that "posts"/inserts new user into user_info table
//responds with -> status/error

// Use the express.Router class to create modular, mountable route handlers. 
// A Router instance is a complete middleware and routing system; 
// for this reason, it is often referred to as a “mini-app”.

router.post('/register', userController.createUser, (req, res) => {
  console.log("Successful post to database (/register route). ");
  return res.status(200).json({});
});

router.post('/login', userController.login, (req, res) => {
  console.log('Successful post to database (/login route).')
  return res.status(200).json(res.locals.user);
})

router.get('/profile/:id', userController.getProfile, (req, res) => {
  console.log('Successful get to database (/profile:id route).')
  return res.status(200).json(res.locals.user);
})

module.exports = router;