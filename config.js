const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_35_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2eG45T3RiaU10SE5pWG43MWRzZjB1M2xJdEtVYVVaYmJoelFrZHA2Y1kwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NTQyNzYyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFMjRGMjlGMTQ2MEZFOEUwNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTYxNjk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ1NDI3NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTVDNEVGQ0Q0RjI0NkQ0RDZCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NjE3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3BtSHRoOGpSdHkyNjNlMHRieHI4d1wiLFxuICBcInBob25lSWRcIjogXCI5NGQ4YTAxNi1hNzY1LTRjMDktODY5Ni1mNmMyNzEyNTk4MGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTEzLFxuICAgICAgMjUxLFxuICAgICAgMTA5LFxuICAgICAgNTQsXG4gICAgICA3OCxcbiAgICAgIDE4NyxcbiAgICAgIDIxNixcbiAgICAgIDE1MCxcbiAgICAgIDI0MCxcbiAgICAgIDg0LFxuICAgICAgMTIwLFxuICAgICAgMjEwLFxuICAgICAgMTkzLFxuICAgICAgMjEwLFxuICAgICAgMjQ2LFxuICAgICAgMjI1LFxuICAgICAgNTYsXG4gICAgICAyMzgsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyOSxcbiAgICAgIDE2NixcbiAgICAgIDgsXG4gICAgICA4MyxcbiAgICAgIDE4MixcbiAgICAgIDgyLFxuICAgICAgMTYsXG4gICAgICAzOCxcbiAgICAgIDEyMixcbiAgICAgIDk0LFxuICAgICAgMTg5LFxuICAgICAgMjUsXG4gICAgICAxMDksXG4gICAgICA0MixcbiAgICAgIDE4OCxcbiAgICAgIDE1OSxcbiAgICAgIDYsXG4gICAgICAyNDMsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDk3WThCRUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NTQyNzYyMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUHN5Z2VyXCIsXG4gICAgXCJsaWRcIjogXCIyMjc0NTMyMTM2MjI0MDY6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZVQrNHNPRU5yazg3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1XQWZLTHFmS1Z3ZG56M3JIKzl2UXhQZjZac2JoNHI1clg2SUtZSXkxSEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRTlvd0xSejczbGI0Y1JpejBjOGhaVTRrYVg4L0hjVDhUQnFoNitWVHBJQVdSS2NPb00xYUVpUmFiN2p1cFB5VStJcmFYTkszYmE4RDN6SUtGTWE0REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUJ5QXRxYWU4b003OEQyTU9sV21VbjhCTVNoOTdPWWlXWERGdUhyZVNSNDkxdWZ1aGQwWkhGTDJ6cmVBekZkaVU3KzUycDhhWjUrbUs3OWVhZ1lsRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ1NDI3NjIyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTYxNjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzFyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMXIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5S0tueXczcTkyNG9ncnAvbStHOEVKSUpDY20rTWZObGMwdnh1Nk9LVkJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3ODMxODI3OTEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzIxNTYxNjk4MDcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
