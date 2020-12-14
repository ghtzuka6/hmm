const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: '' });
const Discord = require('discord.js');
const client = new Discord.Client();

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();



