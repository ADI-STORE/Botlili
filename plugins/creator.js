import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Developer Bot `, `๐ซ Don't call me ๐ฅบ`, `โจrey509invisible@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://youtube.com/channel/UCjoPsysjCn2Qa0dRalUb2mg`, `nothing`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp ๐ฃ`, `๐ต Don't spam/call me ๐คฌ`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://youtube.com/channel/UCjoPsysjCn2Qa0dRalUb2mg`, `๐ค Dont Forget To Donate!`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor owner ku, jangan call/spam yah tod๐`, wm, 'Menu', '.menu', 'Donasi', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
