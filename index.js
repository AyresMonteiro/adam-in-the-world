const Discord = require('discord.js');
const { Intents: { FLAGS: {
  GUILDS,
  GUILD_MESSAGES,
  GUILD_PRESENCES,
  DIRECT_MESSAGES,
  DIRECT_MESSAGE_TYPING,
  DIRECT_MESSAGE_REACTIONS,
} } } = Discord;

const MessageParser = require('./src/MessageParser');
const Router = require('./src/Router');

require('dotenv').config();

const {
  DISCORD_BOT_TOKEN
} = process.env;

const bot = new Discord.Client({
  intents: [
    GUILDS,
    GUILD_MESSAGES,
    GUILD_PRESENCES,
    DIRECT_MESSAGES,
    DIRECT_MESSAGE_TYPING,
    DIRECT_MESSAGE_REACTIONS,
  ]
});

bot.login(DISCORD_BOT_TOKEN);

bot.on('messageCreate', message => {
  const parsedContent = MessageParser.parse(message);
  Router.route(message, parsedContent[0], parsedContent);
});
