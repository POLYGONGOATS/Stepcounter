const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3000;
const botToken = '7384455845:AAEC6COuB5yDENMp_9OwzoXnglOnJgJMl-g'; // Replace with your bot token from BotFather

const bot = new TelegramBot(botToken, { polling: true });

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { message } = req.body;
  
  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text.toLowerCase();

    // Handle incoming messages
    if (text === '/start') {
      bot.sendMessage(chatId, 'Welcome to the Telegram Mini App!');
    } else if (text === '/help') {
      bot.sendMessage(chatId, 'This is a help message.');
    } else {
      bot.sendMessage(chatId, 'Sorry, I don\'t understand that command.');
    }
  }
  
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
