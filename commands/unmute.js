const { MessageFlags } = require("discord.js");

module.exports = {
    name: "unmute",
    description: "unmute",

    async run (client, message, args) {

        const guild = client.guilds.cache.get("705253008828661811");
        const member = message.mentions.members.first();
        const role = guild.roles.cache.find(role => role.name === 'muted');

        

        if(!member) return message.channel.send('nu ai mentionat cui vrei sa dai unmute')

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('nu ai permisiune pt a da unmute :P')

        if(message.member.hasPermission('ADMINISTRATOR')) 
        
        if(!role.id) return message.channel.send('user-ul mentionat nu avea mute')

        member.roles.remove("784205082848919583");

        message.channel.send('gata')
    }}