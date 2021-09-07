const { Discord, Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES']});
const config = require('./config.json');

client.once('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.on('messageCreate', message => {
  if(message.content === "-cee2") {
    message.channel.send("https://ceetodiscordtk")
  } else if(message.content === "-hi") {
    message.channel.send("hello Man")
  } else if(message.content == "-yummy" {
    message.channel.send("whats yummy bro , i need food")
  }  
})

client.login(process.config.token)
