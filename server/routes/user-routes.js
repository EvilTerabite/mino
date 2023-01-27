const express = require('express');
const checkAuth = require('../middleware/check-auth');
const userController = '../controllers/user-controller'

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser)


/* PROTECTED */
router.use(checkAuth);
router.post('/logout')