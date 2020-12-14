module.exports = {
    name: "marry",
    description: "plm",

    async run (client, message, args) {
        const member = message.mentions.members.first();
        const filter = m => m.content.startsWith('nu');
        const filter2 = m => m.content.startsWith('da');



    if(!member){ 
message.channel.send('nu ai mentionat cui vrei sa dai marry')
return
} else{
message.channel.send(`${member}, accepti invitatia de la ${message.member}?`)

        message.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time'] })
        .then(collected => message.channel.send('rege ti-ai luat reject:(').catch(console.error));


if(member){
     message.channel.awaitMessages(filter2, { max: 1, time:5000, errors: ['time'] })
     .then(collected => message.channel.send(`Fie ca ${message.member} si ${member} sa aiba o relatie fericita.`).catch(console.error));

        
}
    }}
}