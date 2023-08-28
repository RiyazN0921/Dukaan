const express = require('express');
const Conversationrouter = express.Router();
const conversationController = require('../controllers/conversation.controllers');


Conversationrouter.post('/:chatbotId/conversations', conversationController.startConversation);
Conversationrouter.get('/:chatbotId/conversations', conversationController.allConversations);
Conversationrouter.get('/:conversationId', conversationController.getConversationById);
Conversationrouter.put('/:conversationId', conversationController.updateConversation);
Conversationrouter.delete('/:conversationId', conversationController.deleteConversation);

module.exports = Conversationrouter;
