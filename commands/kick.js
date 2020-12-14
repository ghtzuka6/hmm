module.exports = {
    name: 'kick',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('n-ai permisiune mue')

    
        if(message.member.hasPermission('KICK_MEMBERS'))
        
        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("am dat kick");
        }else{
            message.channel.send(`nu ai mentionat cui vrei sa dai kick`);
        }
    }
}