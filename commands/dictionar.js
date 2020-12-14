const { MessageEmbed } = require('discord.js');



module.exports = {
    name: "dictionar",
    description: "simple urban",

    async run (client, message, args) {
        const fetch = require('node-fetch');
        const querystring = require('querystring');

    if(!args.length) {
        return message.channel.send('nu ai mentionat ce vrei sa cauti dummmb')
    }

    const query = querystring.stringify({ term: args.join(' ') });

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());


    if(!list.length) {
        return message.channel.send(`nu am gasit nici un rezultat pentru ${args.join(' ')}.`)

    }    
    
    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

    const [answer] = list;

const embed = new MessageEmbed()
	.setColor('#EFFF00')
	.setTitle(answer.word)
	.setURL(answer.permalink)
	.addFields(
		{ name: 'definitie', value: trim(answer.definition, 1024) },
		{ name: 'exemplu', value: trim(answer.example, 1024) },
	);

message.channel.send(embed);
    
    
    
    
    
    
    
}}