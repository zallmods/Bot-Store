const fs = require('fs')

global.namabot = "Bot Store"
global.namaowner = "Zallmodsofc"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6281378578294','6281378578294']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !addsewa
• !delsewa
• !ceksewa
• !listsewa
• !pay
• !setpay
• !list
• !addlist
• !updatelist
• !dellist
• !jeda
• !tambah
• !kurang
• !kali
• !bagi
• !setproses
• !changeproses
• !delsetproses
• !setdone
• !changedone
• !delsetdone
• !proses
• !done
• !welcome
• !goodbye
• !setwelcome
• !changewelcome
• !delsetwelcome
• !setleft
• !changeleft
• !delsetleft
• !antiwame
• !antiwame2
• !antilink
• !antilink2
• !open
• !close
• !hidetag
• !add
• !kick
• !stiker
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}