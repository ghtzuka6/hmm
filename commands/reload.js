module.exports = {
    name: "reload",
    description: "reload a command",

    async run(client, message, args) {

        const member = message.mentions.users.first();

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('tac pac mue n ai permisiune')

        if(message.member.hasPermission('ADMINISTRATOR'))
        
        if (!args.length) return message.channel.send(`n-ai mentionat ce comanda vrei sa reincarci, ${message.author}!`);
const commandName = args[0].toLowerCase();
const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return message.channel.send(`nu-i nici o comanda cu numele \`${commandName}\`, ${message.author}!`);
delete require.cache[require.resolve(`./${command.name}.js`)];

try {
	const newCommand = require(`./${command.name}.js`);
	message.client.commands.set(newCommand.name, newCommand);
} catch (error) {
	console.error(error);
	message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
}

message.channel.send(`Command \`${command.name}\` was reloaded!`);
    }
}