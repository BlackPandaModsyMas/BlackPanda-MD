const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "0921700706"
global.danano = "63255590"
global.shopeepayno = "09-3694-1488"
global.creator = "56921700706@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `𝗕𝗹𝗮𝗰𝗸 𝗣𝗮𝗻𝗱𝗮 𝗕𝗼𝘁 𝟮𝟰/𝟳`
global.packname = `blackpandamods`
global.author = `𝗕𝗹𝗮𝗰𝗸𝗣𝗮𝗻𝗱𝗮`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.ownerNomor = '56921700706'
global.ownerName = 'Creador Black Panda'
global.ownerNumber = ["56921700706@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Por favor espera',
    succes: 'Realizado Exictosamente',
    admin: 'Esto es solo para el admin del grupos!!',
    botAdmin: 'El bot no puede realizar esta accion hasta ser admin!',
    owner: 'Esto solo lo puedo usar el owner!',
    group: 'Este comando es solo para grupos!!',
    private: 'Este es solo para chat privado!',
    bot: 'Este solo lo puede usar el bot!!',
    error: 'Por favor espere se lo comunicare a mi creador.',
    premium: 'Perdon no eres premiun comunicado con mi creado dale a Comprar Premium',
}

global.bapak = [' ']

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})