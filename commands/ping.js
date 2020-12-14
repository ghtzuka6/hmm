module.exports = {
    name: "ping",
    description: "Latency",

    async run (client, message, args) {

        message.channel.send({embed: {
            color: 000000,
            description: `ping-ul este ${Date.now() - message.createdTimestamp}ms plm
                          si ping-ul de la api este ${Math.round(client.ws.ping)}ms`

        }
    });
    }}


