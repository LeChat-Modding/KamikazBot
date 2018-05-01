const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.BOT_TOKKEN);

client.on("ready", () => {
    console.log(`Le client a bine été logé comme ${client.user.tag}`);
});

client.on('message', async message => {
    if(message.content.startsWith("/") || message.content.startsWith(":")) {
       message.guild.channels.find('name', "logs").send(`${message.author} a envoyer la commande ${message.author.lastMessage}`).catch(console.error);
    }

});
