exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, submenu1(isPrefix), m)
      if (option == 2) return client.reply(m.chat, submenu2(isPrefix), m)
      if (option == 3) return client.reply(m.chat, submenu3(isPrefix), m)
      if (option == 4) return client.reply(m.chat, submenu4(isPrefix), m)
      if (option == 5) return client.reply(m.chat, submenu5(isPrefix), m)
      if (option == 6) return client.reply(m.chat, submenu6(isPrefix), m)
   },
   error: false
}

const submenu1 = prefix => {
   return `◦  ${prefix}fb *رابط فيديو من فيسبوك*
◦  ${prefix}ig *رابط فيديو من الانستغرام*
◦  ${prefix}mediafire *رابط فيديو من ميديافاير*
◦  ${prefix}play *اذخل اسم الاغنية*
◦  ${prefix}pin *link*
◦  ${prefix}podcast *link*
◦  ${prefix}tiktok *link*
◦  ${prefix}tikmp3 *link*
◦  ${prefix}tikwm *link*
◦  ${prefix}twitter *link*
◦  ${prefix}video *query*
◦  ${prefix}ytmp3 *رابط فيديو من اليوتوب*
◦  ${prefix}ytmp4 *رابط فيديو من اليوتوب*
◦  ${prefix}yts *البحث في اليوتوب*`
}

const submenu2 = prefix => {
   return `◦  ${prefix}antidelete *on / off*
◦  ${prefix}antilink *on / off*
◦  ${prefix}antivirtex *on / off*
◦  ${prefix}filter *on / off*
◦  ${prefix}localonly *on / off*
◦  ${prefix}left *on / off*
◦  ${prefix}welcome *on / off*
◦  ${prefix}mute *1 / 0*
◦  ${prefix}everyone *text*
◦  ${prefix}hidetag *text*
◦  ${prefix}group *close / open*
◦  ${prefix}setdesc *text*
◦  ${prefix}setname *text*
◦  ${prefix}setleft *text*
◦  ${prefix}setwelcome *text*
◦  ${prefix}kick *mention or reply*
◦  ${prefix}demote *mention or reply*`
}

const submenu3 = prefix => {
   return `◦  ${prefix}limit
◦  ${prefix}me`
}

const submenu4 = prefix => {
   return `◦  ${prefix}ava *mention or reply*
◦  ${prefix}q *reply chat*
◦  ${prefix}run
◦  ${prefix}response *url*
◦  ${prefix}sticker *reply media*
◦  ${prefix}swm *packname | author*
◦  ${prefix}take *packname | author*
◦  ${prefix}toimg *reply sticker*
◦  ${prefix}tomp3 *reply video*
◦  ${prefix}tovn *reply audio / video*`
}

const submenu5 = prefix => {
   return `◦  ${prefix}autodownload *on / off*
◦  ${prefix}autoread *on / off*
◦  ${prefix}bc *text or reply media*
◦  ${prefix}bcgc *text or reply media*
◦  ${prefix}backup
◦  ${prefix}ban *mention or reply*
◦  ${prefix}changename *text*
◦  ${prefix}unban *mention or reply*
◦  ${prefix}block *mention or reply*
◦  ${prefix}unblock *mention or reply*
◦  ${prefix}chatbot *on / off*
◦  ${prefix}debug *on / off*
◦  ${prefix}prefix *symbol*
◦  ${prefix}-prefix *symbol*
◦  ${prefix}+prefix *symbol*
◦  ${prefix}cmdstic
◦  ${prefix}-cmdstic *reply sticker*
◦  ${prefix}+cmdstic *reply sticker*  
◦  ${prefix}disable *command*
◦  ${prefix}enable *command*
◦  ${prefix}-prem *mention or reply*
◦  ${prefix}+prem *mention or reply*
◦  ${prefix}multiprefix *on / off*
◦  ${prefix}plugen *plugin*
◦  ${prefix}plugdis *plugin*
◦  ${prefix}join *link*
◦  ${prefix}reset
◦  ${prefix}restart
◦  ${prefix}self *on / off*
◦  ${prefix}setpp *reply photo*
◦  ${prefix}setmsg *text*
◦  ${prefix}setwm *packname* | *author*
◦  ${prefix}-mimic *mention or reply*
◦  ${prefix}+mimic *mention or reply*
◦  ${prefix}online *on / off*
◦  ${prefix}-owner *mention or reply*
◦  ${prefix}+owner *mention or reply*`
}

const submenu6 = prefix => {
   return `◦  ${prefix}botstat
◦  ${prefix}checkapi
◦  ${prefix}hitdaily
◦  ${prefix}hitstat
◦  ${prefix}list
◦  ${prefix}owner
◦  ${prefix}premium`
}
