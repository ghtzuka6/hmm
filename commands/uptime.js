const { run } = require("./funhelp");
const Discord = require('discord.js');

module.exports = {
    name: "uptime",
    description: "uptime",

    async run(client, message, args) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
           .setTitle(`Uptime`)
           .addField("Days", `${days}`)
           .addField("Hours", `${hours}`)
           .addField("Minutes", `${minutes}`)
           .addField("Seconds", `${seconds}`)
       message.channel.send(embed);

    
    }}