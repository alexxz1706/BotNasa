let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*https/wa.me/595984303784 ${pesan}`
  let teks = `*𝐆𝐇𝐎𝐒𝐓 𝐁𝐎𝐓 - 𝐌𝐃*
   ${oi}\n\n🛍️ *@usxr.alxb:*\n`
  for (let mem of participants) {
  teks += `🍿 @${mem.id.split('@')[0]}\n`}
  teks += `𝐆𝐇𝐎𝐒𝐓 𝐁𝐎𝐓 - 𝐌𝐃`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler