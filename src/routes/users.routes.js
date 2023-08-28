const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/user.controller');

userRoutes.post('/user', userController.createUser)
userRoutes.get('/user', userController.getAllUsers);
userRoutes.get('/user/:id', userController.getUser);
userRoutes.put('/user/:id', userController.updateUser);
userRoutes.delete('/user/:id', userController.deleteUser);

module.exports = userRoutes;