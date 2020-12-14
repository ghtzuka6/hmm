module.exports = {
    name: 'qd',
    description: 'quick-delete ',
    async run(client, message, args) {

        const member = message.mentions.members.first();
        const amount = args.join(" ");


        if (!amount) return message.channel.send('cate mesaje vrei sa sterg?')
        
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.member}, nu ai permisiuni pentru a sterge mesaje.`)

        if (message.member.hasPermission('ADMINISTRATOR')) {
            await message.channel.messages.fetch({
                limit: amount
            }).then(messages => {
                message.channel.bulkDelete(messages);

                message.channel.send({
                    embed: {
                        color: 000000,
                        description: 'scurt si la obiect',
                        title: 'mesaje sterse'
                        
                    }
                    
                })
                
            })
        }
    }
}