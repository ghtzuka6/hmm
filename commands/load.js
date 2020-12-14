module.exports = {
    name: "load",
    description: "loaddddd",

    async run(client, message, args) {
        

        client.user.setActivity('up and running v1.0 host: localhost')

        message.channel.send(`${message.member}, verifica-mi status-ul.`)
    }}