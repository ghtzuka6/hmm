const { MongooseDocument } = require("mongoose");

module.exports = {
    name: "whois",
    description: "whois command",

    async run(client, message, args) {




        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
        const guild = message.guild;
        const createdAt = member.user.createdAt
        const joinedAt = message.author.joinedAt
        const status = member.presence.status

        if(!member) return message.channel.send({ embed: {
            title: "Membrul nu a fost gasit",
            description: "Verifica daca am permisiuni sau daca membrul este pe server.",
            color: "328759",
        }})

        if(member) return  message.channel.send({ embed: {
        title: `Informatii despre ${member}`,
        fields: [{
            name: "Creation date",
            value: `${createdAt}`
        },
        {
            name: "Joining date",
            value: `${joinedAt} || daca apare undefined, comanda este inca in lucru, scuze`,
        },
        {
            name: "Current status",
            value: `Appearing as ${status}`,
        
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: `Requested by ${message.author.username}`,
    }
}})
    }}