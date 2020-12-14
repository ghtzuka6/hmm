module.exports = {
    name: "warn",
    description: "warn a member",

    async run(client, message, args) {

        if (!args.length) return message.channel.send("cui vrei sa dai warn")


        const member = message.mentions.members.first();
        if (!member) return message.channel.send("nu ai mentionat motivul")
        const guild = message.guild;
        const user = member.user;


        if (!message.member.hasPermission('ADMINISTRATOR'))
            return message.channel.send({
                embed: {
                    title: "am prins golanu",
                    description: "n-ai permisiune sa dai warn, mue.",
                }
            })
        if (message.member.hasPermission('ADMINISTRATOR'))

            user.send(`${member}, you have recieved a warning in ${guild}. Reason: ${args.slice(1).join(' ')} `)

        message.channel.send({
            embed: {
                title: "User warned",
                description: `${message.member} i-a dat warn lui ${member}.`,
                fields: [{
                    name: "motiv",
                    value: `${args.slice(1).join(' ')}`
                }
            ],
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: "© gigel.exe"
                }
            }
        })
    }
}

