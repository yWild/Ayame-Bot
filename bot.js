const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzYwNTQxODczNDk0MDMyMzg0.DKbrDQ.xGA3mRi6S6BcRb_TfUCu2xHkB-g');

bot.on('message', message => {
    let responseObject = {
        "eae" : "kk eae men",
        ".nsfw" : "Está na aba NSFW, mas ainda não está disponivel!!!Paciência!!"
    };
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
});
