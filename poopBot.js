// poopBot.js const { Client, GatewayIntentBits, Partials } = require("discord.js"); require("dotenv").config();

const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ], partials: [Partials.Message, Partials.Channel] });

const motsCaca = [ "caca", "merde", "chier", "chiotte", "chiottes", "déféquer", "crotte", "excrément", "prout", "toilettes", "pipi", "popo", "diarrhée", "fiente", "détritus" ];

client.once("ready", () => { console.log(💩 PoopBot activé en tant que ${client.user.tag}); });

client.on("messageCreate", async (message) => { if (message.author.bot) return;

const contenu = message.content.toLowerCase(); const contientCaca = motsCaca.some(mot => contenu.includes(mot));

if (contientCaca) { try { await message.react("💩"); // emoji caca } catch (err) { console.error("Erreur de réaction:", err); } } });

client.login(process.env.POOP_TOKEN);
