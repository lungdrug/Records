module.exports = {
  Admins: ["710144357193220126", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", //Support Server Link
  Token: process.env.Token || "ODIxMDk4MDAyNTgzMzg4MjAw.YE-xGw.QlLA_rAu06mo-QVrOVgUgibsNjM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "821098002583388200", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "SZ_xXkPKZljfWWEngW4iNH_xQjCZCOGm", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "RecordsBotPass!", //A Secret like a password
  IconURL:
    "https://i.imgur.com/WDESStv.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "pass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "8a5b58ac7f6543469f670af87422fd79", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "41a9f32f0c294afc85899c95cb34b3b2", //Spotify Client Secret
  },
};
