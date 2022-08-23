//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['201015676644']
global.premium = ['201015676644']
global.ownernomer = 'https://wa.me/+201015676644'
global.ownername = 'Ammar | Madara 🐦☕'
global.botname = 'am.terbo | Bot'
global.footer = '©NexusNwInc.'
global.ig = 'https://chat.whatsapp.com/KufYtuZLP06HxfMmCeuQhe'
global.region = 'مصري يانجم ولله🐦☕'
global.sc = 'https://chat.whatsapp.com/KufYtuZLP06HxfMmCeuQhe'
global.myweb = 'https://chat.whatsapp.com/KufYtuZLP06HxfMmCeuQhe'
global.packname = 'am.terbo | Bot'
global.author = '🐦🐦☕'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'اشطا ✓',
    admin: '🐦انت مش ادمن يانقم!',
    botAdmin: 'هات بس كدة ادمن بالحب الأول🐦!',
    owner: 'هندخل في شغل بعض ولا اي؟🐦!',
    group: 'دة في الجروبات ياحب مينفعش هنا🐦!',
    private: 'تعالى خاص ادهالك🐦😉!',
    bot: 'This Feature Is Only For Bot',
    wait: 'اشطا ثواني..',
    error: 'اكتب عدل بس وحياتك🐦🐦!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
