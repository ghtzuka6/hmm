module.exports = {
    name: "musichelp",
    description: "music commands",

    async run(client, message, args) {

        message.channel.send({ embed: {
            title: "comenzi de muzica",
            color: "012303",

            fields: [{
                name: "play",
                value: "baga o melodie in queue"
            },
            {
                name: "skip",
                value: "treci peste o melodie",
            },
            {
                name: "stop",
                value: "scoate botu dp voice",
            }
        ],





        }})

}}