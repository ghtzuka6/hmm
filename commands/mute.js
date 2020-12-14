module.exports = {
    name: "mute",
    description: "mute a member / not timed mute",
    

    async run(client, message, args) {

        const guild = message.guild
        const role = guild.roles.cache.find(role => role.name === 'muted');
        const member = message.mentions.members.first();

        if(!member) return message.channel.send('cui vrei sa dai mute?')

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('nu ai permisiune pentru a da mute.')

        if(message.member.hasPermission('ADMINISTRATOR'))

        member.roles.add(role);

        message.channel.send({ embed: {
            title: `${message.member} a dat mute`,
            description: `iauzi ia`,
            color: 000000
            
        }})
    }}
