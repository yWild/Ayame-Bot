const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzYwNTQxODczNDk0MDMyMzg0.DKbrDQ.xGA3mRi6S6BcRb_TfUCu2xHkB-g');

bot.on('message', message => {
    let responseObject = {
        "eae" : "kk eae men",
        "Cade os hentais?" : "Está na aba NSFW, mas ainda não há nada, então segura a punheta ai!!"
    };
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
});
