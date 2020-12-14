const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'Nzc3NTM2MTMyMjU0NjYyNjc3.X7E28w.POzmZe4yGBCF0ryTpUIcULz7cFo' });
const Discord = require('discord.js');
const client = new Discord.Client();

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();



