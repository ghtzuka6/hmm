const { description } = require("./reload");


module.exports = {
    name: "christmas",
    description: "play christmas music",

        async run(client, message, args) {

            const voiceChannel = message.member.voice.channel;
            const member = message.mentions.users.first;
            const connection = await voiceChannel.join();
            const fs = require('fs');
            const ffmpeg = require('ffmpeg');
            const Guild = message.guild; // Getting the gui


        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('nu ai permisiune sa accesezi comenzile de voice')

        if(message.member.hasPermission('ADMINISTRATOR')) 
            voiceChannel.join()
            .then(connection => {}).catch(err => console.log(err));
            connection.voice.setSelfDeaf(true);

            const dispatcher = connection.play('song.mp3')





}}

    