
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', 'nih kak jangan lupa follow ig ownerku kak : https://www.instagram.com/anggatzi123/', m, false, {
    thumbnail: Buffer.alloc(0)
  })
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler
