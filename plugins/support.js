const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "🥰",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec `╭⟣┈┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┅┄┈⟢╮
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ᴍᴀʟᴠɪɴ ᴋɪɴɢ (🇿🇼)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *2.0.0* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

╰⟣┈┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┅┄┈⟢╯
> ＭＡＬＶＩＮ ＸＭＤ ＢＯＴ     

⟣┈┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┅┄┈⟢
${readMore}
*CHANNEL*
https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

${readMore}
*Mr Malvin King*
wa.me/263714757857?text=Support!

╰⟣┈┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┅┄┈⟢╯

> *© ᴊᴏɪɴ ᴍʏ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ🚀*
`
await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
