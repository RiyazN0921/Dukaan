const express = require('express');
const bodyparser = require('body-parser');
const db_connection = require('./src/db.config/db.config');
const userRoutes = require('./src/routes/users.routes');
const chatbotRoutes = require('./src/routes/chatbot.routes');
const Conversationrouter = require('./src/routes/conversation.routes');
const endUserrouter = require('./src/routes/enduser.routes');

const app = express();

app.use(userRoutes);
app.use(chatbotRoutes)
app.use(Conversationrouter)
app.use(endUserrouter)


app.listen(3000, async ()=> {
    console.log("server listening on port 3000");
    await db_connection();
})