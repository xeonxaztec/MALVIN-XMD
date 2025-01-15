const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "🩵",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `**Hello there ${pushname} MALVIN-XMD User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet MALVIN-XMD WhatsApp Bot.


*Thanks for using MALVIN-XMD 🇿🇼* 

> Don't forget to fork the repo ⤵️

👨‍💻-: https://github.com/kingmalvn/MALVIN-XMD

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
