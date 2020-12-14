const { run } = require("./reload");

module.exports = {
    name: 'help',
    description: 'display help command',
    cooldown: '5',

    async run(client, message, args) {

        const prefix = 'c!';
        const data = [];
        const { commands } = message.client;
        const cmdlist = data.push(commands.map(command => command.name).join(' '));;

        if(!args.length) {
            data.push(`aici ai o lista cu toate comenzile mele`);
            data.push(commands.map(command => command.name).join(' '));

            return message.author.send(data, { split: true })
            .then(() => {
                if(message.channel.type === 'dm') return;
                message.reply('ti-am trimis un dm cu toate comenzile mele')
            })

            .catch(error => {
                console.error('n-am putut trimite dm')
                message.reply('nu am putut sa iti trimit mesaj, ai dm-urile disabled sau ma ai la block ;(')
            });
        }       
    
    
    }}

