const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "$";
// captain
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("Rainbow , $help .",{type: 'WATCHING'});
  
  });// captain
client.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
// captain
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {// captain
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };// captain
                };// captain
            };// captain
        });
    }, 4000);// captain
})

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);// OBX codes
    switch(command) {
        case "set" :
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINSTRATOR`' );
        message.guild.createRole({name : "RainbowBot .", color : "RANDOM"}).then(r => {// captain
            r.edit({color : "RANDOM"});
            suck[message.guild.id] = {role : r.id};// captain
        });// captain
    };// captain
});// captain
client.on("message", message => {
  if (message.content === "$help") {
      message.react('🌈')
message.author.send(`**
$set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
$inv 
- لدعوة البوت
- To Invite the bot
// captain// captain// captain
خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه// Rqmz Codes
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!// captain
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow // captain
رآبط البوت - Bot Invite link// captain
- Hii
**`)// captain
  }})
   client.on('message', message => {
	   if(message.content.startsWith(`r#inv`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.react('🌈')// captain
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")// captain
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")// Rqmz Codes
		   .setTimestamp()// captain
		   .setFooter(`Requested By | ${message.author.username}`)// captain
		   .setColor("RANDOM")
		   message.author.send({embed})// captain
	   }// captain
   });
client.login(process.env.BOT_TOKEN)
