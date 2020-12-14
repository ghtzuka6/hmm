
module.exports = {
    name: "warnings",
    description: "check user warnings",

    async run(client, message, args) {

        const member = message.mentions.members.first();

        if (!member) return message.channel.send('nu ai mentionat membrul')
        const guild = message.guild;

        if (!member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.member}, nu ai permisiune sa faci asta.`);

        if (member.hasPermission('ADMINISTRATOR'))

            return message.channel.send({
                embed: {

                    description: `${member}`,
                    title: `warning list for ${member}`,

                }})
            }}

