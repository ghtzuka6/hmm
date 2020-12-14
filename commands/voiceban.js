


module.exports = {
    name: 'voiceban',
    description: 'ban someone from entering voice channels',

    
    async run(client, message, args) {

        const member = message.mentions.members.first();
        if (!member) return message.channel.send('specifica cui sa dai ban in mm')

        if (!message.member.hasPermission('ADMINISTRATOR')) 
        return message.channel.send('Nu ai permisiune sa dai voiceban, golane.');

        if(member.hasPermission('ADMINISTRATOR'));        
        const role = message.guild.roles.cache.find(role => role.name === 'voice-banned');
        member.roles.add(role);


        message.channel.send({
            embed: {
                color: 000000,
                description: 'User banat din a intra pe voice.'
            }
        }); 
    }
};