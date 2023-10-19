let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar3 = `${pickRandom(['⚔️ǫᴜᴇ ᴘʀᴏ ʜᴀs ᴍɪɴᴀᴅᴏ','✨ ɢᴇɴɪᴀʟ!! ᴏʙᴛɪᴇɴᴇs','ᴡᴏᴡ!! ᴇʀᴇs ᴜɴ(ᴀ) ɢʀᴀɴ ᴍɪɴᴇʀᴏ(ᴀ) 🍁 ᴏʙᴛɪᴇɴᴇs','ғᴇʟɪᴄɪᴅᴀᴅᴇs!! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs','⛏️ᴏʙᴛɪᴇɴᴇs'])}`
let pp = 'src/minar.mp4'

let hades= Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += hades * 1  
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `✴️YA HAS MINADO ⚔️MICHI COINS ESPERA PARA VOLVER A MINAR${msToTime(time - new Date())} PARA VOLVER A MINAR⚔️`  

m.reply(`*[ 🧿 ] GENIAL MINASTE ${minar3} ${hades} POLVORA COINS💰*`)
global.db.data.users[m.sender].lastcoins = new Date * 1  

}
handler.help = ['minar3']
handler.tags = ['hades']
handler.command = ['minar3', 'miming3', 'mine3', 'minarmichicoins', 'minarcoins', 'minarmichi'] 
handler.fail = null
handler.exp = 0
handler.register = true
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
