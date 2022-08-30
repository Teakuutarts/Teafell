const TTHelpEmbed = require('./help.js')

// Oh, Hi!

command(client, ['ping', 'testcmd'], (message) => {
     message.channel.send('Pong!')
// I am keeping this because it's funny ;p
});
command(client, [''], (message) => {
     message.channel.send('tt what now? Try tt!help silly.')
});