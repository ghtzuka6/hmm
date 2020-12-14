module.exports = {
    name: "staffhelp",
    description: "list moderation cmomanddkfjj",

    async run(client, message, args) {

        message.channel.send({
            embed: {
                color: "482383",
                title: "comenzi moderare",
                fields: [{
                    name: "ban",
                    value: "banezi un membru"
                },
                {
                    name: "kick",
                    value: "dai kick la un membru"
                },
                {
                    name: "mute",
                    value: "dai mute la un membru"
                },
                {
                    name: "qd",
                    value: "dai purge"
                },
                {
                    name: "warn",
                    value: "Dai warn, in lucru momentan."
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: '© gigel.exe'
                }
            }
        })
    }
}