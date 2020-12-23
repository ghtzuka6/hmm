module.exports = {
    name: "help owner",
    description: "display owner help",

    async run(client, message, args) {

        message.channel.send({
            embed: {
                title: "Bot's owner help",
                fields: [{
                    name: "eval",
                    value: "Execute eval command",
                },
                {
                    name: "load",
                    value: "Load command, not working"
                },
                {
                    name: "reload",
                    value: "reload a command",
                },
                {
                    name: "uptime",
                    value: "check uptime of bot"
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: "© gigel.exe"

                }
            }
        })
    }
}