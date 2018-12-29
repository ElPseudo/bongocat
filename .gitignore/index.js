const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Youporn.com, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("process.env.TOKEN");
