const { run } = require("./warn");

module.exports = {
    name: "ban",
    description: "ban a member",

    async run(client, message, args) {

        const member = message.mentions.users.first();
        const guild = message.guild;
        const user = member.user;

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('nu ai permisiune sa banezi membri')

        if(message.member.hasPermission('BAN_MEMBERS'))

        members.ban(member)

        message.channel.send({ embed: {
            title: "user banat",
            description: `${message.member} l-a banat pe ${member}`,
            fields: [{
                name: "motiv",
                value: `${args.slice(1).join(' ')}`,
            }
        ],
            footer: {
                icon_url: client.user.avatarURL(),
                text: "© gigel.exe",
            }
        }
    })
}
}     