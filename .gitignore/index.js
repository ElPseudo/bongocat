const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Youporn.com, !help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = messsage.content.substring(PREFIX.lenght).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("Test");
        break;
    }
});

bot.login("process.env.TOKEN");
