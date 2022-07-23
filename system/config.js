// Owner number
global.owner = '212605784394'
// Owner name
global.owner_name = 'noureddine ouafy'
// Maximum upload file size limit (Default : 550 MB)
global.max_upload = 300
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 10)
global.limit = 10
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['61', '60', '62']
// Put target jid to forward friends story
global.forwards = '212605784394@c.us'
// Get neoxr apikey by registering at https://api.nxr.my.id
global.Api = new (require('./neoxrApi'))('2lleJx')
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Footer text
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ NOUREDDINE OUAFY ッ'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'المرجو الانتظار  . . .'),
   invalid: Func.texted('bold', 'هناك خطأ في الرابط !'),
   wrong: Func.texted('bold', 'هناك مشكلة 😞!'),
   getdata: Func.texted('bold', 'حذث خطأ ما المرجو مراسلة صاحب البوت  . . .'),
   fail: Func.texted('bold', 'خطأ حذث ما المرجو الاعادة لاحقا وليس الان 😒!'),
   error: Func.texted('bold', 'اوووبس ماذا جرى هناك خطأ ما آسفون قم بالاعادة لاحقا عزيزي !'),
   errorF: Func.texted('bold', 'آسفون هذه الميزة حذث فيها خطأ ما .'),
   premium: Func.texted('bold'.'),
   owner: Func.texted('bold', 'This command only for owner.'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'This command will only work in groups.'),
   botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
   admin: Func.texted('bold', 'This command only for group admin.'),
   private: Func.texted('bold', 'Use this command in private chat.')
})
