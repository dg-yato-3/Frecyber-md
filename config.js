//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://dreamguyskiyo:Ryv6BxyGDMTjSBB0@cluster0.5utbusu.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/adaa7d3e068bcf5f4d3a5.jpg";
global.devs = "2349018371490,2349018371490,2349018371490,2349018371490";
global.sudo = process.env.SUDO || "234901837149,234901837149,234901837149,234901837149";
global.owner = process.env.OWNER_NUMBER || "234901837149,2349018371490,2349018371490,2349018371490,234901837149,234901837149,234901837149";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxIZW9UOUdGeVNybVJRM1V2NGJPb1RFc0hkOXpjQXJwVzBrNWlPbkUyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1lRNzNZRDhWZzJ0Nkx0ZWdEVXVqbTA3YjFmekkrUFhtSk5QRnBCWldsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT25TVmxMZUErc2lMTkhJWHRtcDQyRWY3VVdHNEJzd1lIRVUyK3cydGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIya09SbDVJQkJhZVpQZHVxTDNpeDNhZWdXYmhVVm9OQ3U3eGRQMndqRFdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDSXQ4MU9DNWVLdVdFZkNqSWF6V3hOcHFDNWxrOU01TWFXTmxKWXBYa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5NQngwaTdJZ3lVTENTM01mcUNMa0Fubllndy9sdm5zM1VxR1NEZW9qM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNBanYyOGNNY1ZhcTJ1REkwdXhJenYrZTM3UWI2Rm9TazZoVHdJODRGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXFLS08wUGpyZ1E3TzkrUzY4ZkRaZG9qeFNiZlZWUlZHZS9WNE1qamNpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpLSjJMUzVhQTQ5NnBYSDdtdTJUK2FPNlV3Ujh2N0h4MXR6Z3JwSTh1cTM2NzVUZkVlZXJ6dkJuTzRYUVdpZk9jMGtFN2Y5UkpHWGMybDhzZzhaaEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJOdTV6V2d3czcwOUVHMitBNG00NEFFU2lSeWtsTVQ5RXpjTVJORXkwcjVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTgzNzE0OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjBBQTFEREZBNDQ1MjBDQjBDMUIyMEMyOEM5MkFGNkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDQ0NjQ1M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN3duVFhxWFZSZDZUcmRKRklfNkVqdyIsInBob25lSWQiOiJiNTIxN2I4NC01ZmI4LTRmODItOTAwYi04MmE2MzQxZTkwMWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODFRalNKVW9SZTAwSUNZL0laYjhMbDZpdVc0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcvLy9UVnZHeGJQaVBzSU1WNHphQWFwblhIMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1ODlWSkhWNiIsIm1lIjp7ImlkIjoiMjM0OTAxODM3MTQ5MDo1MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHp6cTkwSEVPVHRvN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMzYvMkE4VHBiY2hLV3hoUUdaUnQrRUhyT0wvSCtNZEFTeEJ3TFhIMVpobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicGFnbHJndnpmMnRqQkJ4NTVVNGdaNml5NVZwQnMzc09wWDN0aUptYVRmOTNRSTNnY0VHMDdJcjJ2QUgwR0w5QXhLWFRBK1lTenZtcmszVVZRS0MvQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjgyRzZzKzVmd0N5WlQ3M2ZWOGFnbWp5RUlRaDZkdjd4UmlrU0ZtVUhPSDZoVEFRL0dtZWFiSWtUVzZjK054dnluZ0wyb1hUVVJxVkpBNUNCZ3ZpSER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxODM3MTQ5MDo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkK3Y5Z1BFNlczSVNsc1lVQm1VYmZoQjZ6aS94L2pIUUVzUWNDMXg5V1lhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0NDQ2NDQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURtRCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is Anonymous",
  author: process.env.PACK_AUTHER || "Anonymous",
  packname: process.env.PACK_NAME || "Anonymous",
  botname: process.env.BOT_NAME || "Anonymous",
  ownername: process.env.OWNER_NAME || "Anonymous",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
