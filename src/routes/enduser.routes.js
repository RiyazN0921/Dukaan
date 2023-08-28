const express = require('express');
const endUserrouter = express.Router();
const endUserController = require('../controllers/enduser.controller');


endUserrouter.post('/', endUserController.createEndUser);
endUserrouter.get('/', endUserController.getEnduser);
endUserrouter.get('/:endUserId', endUserController.getUserbyid);
endUserrouter.put('/:endUserId', endUserController.updateEndUser);
endUserrouter.delete('/:endUserId', endUserController.deleteUser);

module.exports = endUserrouter;
