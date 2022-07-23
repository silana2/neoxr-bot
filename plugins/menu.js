exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'قسم التحميلات',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP TOOLS',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'USER INFO',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'UTILITIES',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }, {
         title: 'قسم بخاص بصاحب البوت',
         rowId: `${isPrefix}menutype 5`,
         description: ``
      }, {
         title: 'قسم اوامر مهمة',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }]
      await client.sendList(m.chat, '', global.db.setting.msg, '© neoxr-bot v2.2.0', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
