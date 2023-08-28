const express = require('express');
const chatbotRoutes = express.Router();
const chatbotController = require('../controllers/chatbot.controller');

chatbotRoutes.post('/userId/chatbot', chatbotController.createChatbot)
chatbotRoutes.get('/userId/chatbot', chatbotController.getChatbot);
chatbotRoutes.get('/:chatbotId', chatbotController.getchatbotbyid);
chatbotRoutes.put('/chatbotId', chatbotController.updateChatbot);
chatbotRoutes.delete('/chatbotId', chatbotController.deleteChatbot);

module.exports = chatbotRoutes;