const { run } = require("./reload");

module.exports = {
    name: "mentenanta",
    description: "turn on mentenanta mode",

    async run(client, message, args) {

        const config = require('../config.json');

        if(message.author.id !== config.ownerID) return message.channel.send('Trebuie sa fii ownerul botului pentru a pornii mentenanta.')
    
        if(message.author.id !== config.ownerID)

        client.user.setStatus('idle');
        client.user.setActivity('I will now not respond to commands')

        message.channel.send({ embed: {
            title: "Am intrat in mentenanta",
            description: "de acum nu mai pot raspunde la comenzi.",
            color: 000000

        }})
    }}