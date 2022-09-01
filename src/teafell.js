//
//                       Teafell JS API - For Teakuu Discord Bot
//
// hi
// hey, please update any node modules needed, ty!
//                Need this? sql.teakuu.tk - TartsAdmin
//
//
// ich bin ein kätze und ich mag es sooo!!!
//
//
//
//
//
//
//Sorry for the long message board!!! I just like to have this lol
const { Client, Intents, Collection, Permissions, Discord, Attachment, Message, MessageEmbed, MessageManager } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES,],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const { token } = require("./config.json");
client.login(token);
client.once('ready', () => {
console.log('Teafell - ✶ A-K1 - Online ✶');
});
// If you are made to, put this at the end, idk discordjs is weird :/

const command = require('./commands/command.js');
const commands = require('./deploy-commands.js');
const fs = require('fs');
const mongoose = require('mongoose');
const status = require('./events/status.js');
client.once('ready', () => {
	console.log('Loading...');
	console.log('Teafell - Loaded Assets & Bot Configuration');
});

// :3