module.exports = {
    name: "help",
    description: "help command",

    async run(client, message, args) {

        const member = message.mentions.members.first();
        const wow = client.emojis.cache.find(emoji => emoji.name === "wow");
        

        message.channel.send({ embed: {
            color: "078883",
            title: "help gigel.exe",
            description: "aici ai comenzile mele",
             fields: [{
                name: "staffhelp",
                value: `${wow} Aici ai comenzile pentru moderare, numai cei staff pot sa le foloseasca. ${wow}`
                },
                {
                name: "funhelp",
                value: "dai help fun si o sa vezi ca nu stiu ce sa zic"
                },
                {
                name: "ownerhelp",
                value: "comenzi facute doar pt ownerul botului @andrei#1588"
                },
                {
                name: "musichelp",
                value: "comenzi facute de muzica, momentan in lucru peleme"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: "[source code](https://github.com/yngandrew/gigel.exe) | [support server](https://discord.gg/NEqcXNHMg3) | [instagram](https://instagram.com/32andreww)"
            }}
        })
    }}
            

