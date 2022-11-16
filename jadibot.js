/* Enc Dulu Ygy Soalnya Masih Langka */
/* Belom Ada Stopjadibot Nya */

const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (Panda, m, from) => {
const { sendImage, sendMessage } = Panda;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const Panda = await makeWaSocket({
auth: state,
browser: [`Bot MD (BlackPana)`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

Panda.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

Panda.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
Panda.sendNode({
  tag: 'call',
    attrs: {
      from: '56921700706@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await Panda.sendContact(callerId, owner)
await Panda.sendMessage(callerId, { text: `Sistema de bloqueo automatico!!!\nNo llames al bot!!!\nPor favor, ponte en contacto con el propietario para desbloquearlo!!`}, { quoted : qutsnya })
await sleep(8000)
await Panda.updateBlockStatus(callerId, "block")
}
})

Panda.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!Panda.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(Panda, kay, store)
require('./Panda')(Panda, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

Panda.public = true

store.bind(Panda.ev);
Panda.ev.on("creds.update", saveCreds);
Panda.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Codigo para conectarte a Jadi\n\n1. Escanea el codigo lo mas rapido posible\n2. En el caso que se desconecte usas de nuevo .jadibot\n3. el codigo solo 30 segundos \nNo cierres sesion o no te podras volver a conectar\n\n\nhttps://chat.whatsapp.com/JQGWWfqCstmJHrGZCDi4Xn', m)
console.log(connection)
if (connection == "open") {
Panda.id = Panda.decodeJid(Panda.user.id)
Panda.time = Date.now()
global.conns.push(Panda)
await m.reply(`*El bot se conecto a WhatsApp*\n\n*Usuario :*\n _* id : ${Panda.decodeJid(Panda.user.id)}*_`)
user = `${Panda.decodeJid(Panda.user.id)}`
txt = `*Fue conectado a Jadibot*\n\n _Usuario : @${user.split("@")[0]}_`
sendMessage(`56921700706@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Archivo de sesion incorrecto, elimine la sesion y vuelva a escanear`); Panda.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Conexion cerro, reconectando...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Conexion perdida, reconectando.."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero"); Panda.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Dispositivo cerrado, escanee nuevamente y ejecute.`); Panda.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Reinicio requerido, reiniciando.."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else Panda.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

Panda.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Panda.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Panda.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Panda.getName = (jid, withoutContact  = false) => {
id = Panda.decodeJid(jid)
withoutContact = Panda.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Panda.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Panda.decodeJid(Panda.user.id) ?
Panda.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Panda.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Panda.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
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
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
Panda.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

Panda.setStatus = (status) => {
Panda.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Panda.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Panda.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Panda.sendText = (jid, text, quoted = '', options) => Panda.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, conns }