const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = `!eg`;
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       //message.reply('pong');
       message.channel.send(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.token);//token is the Client Secret
