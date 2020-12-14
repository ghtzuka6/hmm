module.exports = {
    name: "funhelp",
    description: "display fun commands",

    async run (client, message, args) {
        
        message.channel.send({ embed: {
            title: "comenzi fun",
            fields: [{
                name: "marry", 
                value: "Da marry cuiva de pe server, din pacate iti poti da si tie."
            },
            {
                name: "simp",
                value: "Foloseste asta cand e un simp pe chat."
            },
            {
                name: "dictionar",
                value: "Dictionar urban, :p"
            },
            {
                name: "cringe",
                value: "o sa vezi"
            }
            
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "© gigel.exe"
        }}})
    }}