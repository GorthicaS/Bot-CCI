const discord = require("discord.js");

const ytdl = require("ytdl-core");

// const Client = new Discord.Client; 

// { Client, Intents } = require('discord.js');

const Client = new discord.Client({ intents: 65535 })

const prefix = "$";

var list = [];

Client.on("ready", () => {
    console.log("bot fonctione");
});
Client.on("raw",(v)=>{
    if(v.t=="MESSAGE_CREATE"){
        var message=v.d
        var channel=message.channel_id
        var guild=message.guild_id
        var msg=message.content.toUpperCase()
        //console.log(msg) 
        // if(msg==""){}                // Se message = OBLIGATOIREMENT de ce qu'il y a entre les guillemets
        // if(msg.startsWith("")){}     // Se message commence OBLIGATOIREMENT avec ce qu'il y a entre les guillemets
        if(msg.startsWith("SALUT")){
            Client.channels.fetch(channel).then(temp=>{
                temp.send("Tu vas bien ?\nPrêt a coder ?!?\nLET'S GO !!!")
            })
        }
        if(msg.startsWith(prefix+"PLAY")){
            // TODO: fonction pour la musique a écrire
        }

        /* a paufiné
        if(msg.includes("TENOR")){
            Client.channels.fetch(channel).then(temp=>{
                temp.send("Stop avec t'es putin de GIF")
            }) 
        } //*/
    }
})
Client.login("YOUR TOKEN");