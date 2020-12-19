const Discord = require('discord.js');
const config = require('./config.json');
const queue = new Map();

const ytdl = require('ytdl-core');
const client = new Discord.Client();

const { token } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');
const { connected } = require('process');

var commands = ['ban', 'comunitate', 'kick', 'voiceban', 'marry', 'purge', 'reload', 'simp', 'staffhelp', 'uptime', 'voice', 'warnings', 'warn', 'dictionar', 'funhelp', 'help', 'load', 'mute', 'ping', 'simp']


client.commands = new Discord.Collection();



const prefix = 'c!';
//You can change the prefix if you like. It doesn't have to be ! or ;



const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
  console.log('I am ready');
  client.user.setActivity('c! for help')

});

client.on('message', message => {
  if(!message.contains === `${prefix}${commands}`) return message.channel.send("Acea comanda nu exista, pentru lista de comenzi ai ``c!help``")
})



function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

client.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(config.prefix + "eval")) {
    if (message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

  client.on("message", async message => {

    if (message.mentions.users.get(client.user.id)) {
      message.channel.send({
        embed: {
          title: `salut, ${message.member},`,
          description: `prefix-ul meu este **${prefix}**`,
        }
      })
    }
  })

  client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);

      const command = args.shift().toLowerCase();

      if (!client.commands.has(command)) return;


      try {
        client.commands.get(command).run(client, message, args);

      } catch (error) {
        console.error(error);

      }}
    })



    client.on("message", async message => {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
    
      const serverQueue = queue.get(message.guild.id);
    
      if (message.content.startsWith(`${prefix}play`)) {
        execute(message, serverQueue);
        return;
      } else if (message.content.startsWith(`${prefix}skip`)) {
        skip(message, serverQueue);
        return;
      } else if (message.content.startsWith(`${prefix}stop`)) {
        stop(message, serverQueue);
        return;
      } else {
        
      }
    });
    
    async function execute(message, serverQueue) {
      const args = message.content.split(" ");
    
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          "pentru a asculta muzica, trebuie sa fii intr-un voice channel."
        );
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
          "I need the permissions to join and speak in your voice channel!"
        );
      }
    
      const songInfo = await ytdl.getInfo(args[1]);
      const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
       };
    
      if (!serverQueue) {
        const queueContruct = {
          textChannel: message.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };
    
        queue.set(message.guild.id, queueContruct);
    
        queueContruct.songs.push(song);
    
        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          play(message.guild, queueContruct.songs[0]);
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
      }
    }
    
    function skip(message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send(
          "You have to be in a voice channel to stop the music!"
        );
      if (!serverQueue)
        return message.channel.send("There is no song that I could skip!");
      serverQueue.connection.dispatcher.end();
    }
    
    function stop(message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send(
          "You have to be in a voice channel to stop the music!"
        );
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end();
    }
    
    function play(guild, song) {
      const serverQueue = queue.get(guild.id);
      if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
      }
    
      const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }

    client.login(config.token);