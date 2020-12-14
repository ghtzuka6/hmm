const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'Nzc3NTM2MTMyMjU0NjYyNjc3.X7E28w.o8yP3htbPa-kCqa-ppr87BK31do' });
const Discord = require('discord.js');
const client = new Discord.Client();

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();



