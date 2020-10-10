const token = process.env.token
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "+"
const ms = require('ms')

client.on("ready", async () => {



    console.log(  "I am READY!")

    setInterval(function() {
        numberomember =client.users.cache.size
        let activities = [ `+Dev: BlazingDragon#2021` ,  `Over ${numberomember} members `]

       let activity = activities[Math.floor(Math.random()*activities.length)]

       let modroles = [ ]

    

       client.user.setActivity(activity, { type: "WATCHING"})
    }, 5000)


})

client.on ("message"  , async message  =>  {
 
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args[1]
    console.log(message.author.username);
    console.log(message.content);
    mention = message.mentions.users.first();
    const server = message.guild;
    if (message.channel.type === 'dm') {

        if (message.author.bot) return;
  
           client.users.cache.get("324442848759906314").send(`${message.author.username}: ${message.content}`);
           message.author.send("Your Message has been received.If you want to contact modmail,please create a ticket inside the server")
      return;}
  
        if(message.author.bot){
            return;
        }
  

})
client.on('guildMemberAdd' , member => 
{

dmwlcm = new Discord.MessageEmbed()
   .setTitle(`Welcome to the Relics NA Server,${member.user.username}!`)
   .setColor("00FFFF")
   .setThumbnail(member.user.avatarURL())
   .setDescription(`Hey there, it's a pleasure to have you in our Relics NA community!!To get yourself setup inside the serever,go ahead and agree to the org rules in #rules.Then,send a screenshot of your profile,in #get-roles to get access to the rest of the server.Make sure you also join our main server here:`)
   .setTimestamp()
member.send(dmwlcm)
member.send("discord.gg/relics")
wlcmmsg = new Discord.MessageEmbed()
          .setTitle(`${member.user.username} has joined the server!!`)
          .setColor("RANDOM")
          .setThumbnail(member.user.avatarURL())
          .setDescription(`Now we have ${numberomember} members in the server!`)
          .setTimestamp()
client.guilds.cache.get("763705288686567446").channels.cache.get("764270419603357718").send(wlcmmsg)

})

client.on("guildMemberRemove" , member =>{
    byemsg = new Discord.MessageEmbed()
    .setTitle(`${member.user.username} has left the server OnO`)
    .setThumbnail(member.user.avatarURL())
    .setDescription(`Now we have ${client.users.cache.size} members in our server.`)
    .setTimestamp()

    client.guilds.cache.get("763705288686567446").channels.cache.get("764270471356088350").send(byemsg)
})


client.login(token)