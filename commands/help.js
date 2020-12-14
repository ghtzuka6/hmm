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
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: "© gigel.exe"
            }}
        })
    }}
            

