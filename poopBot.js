const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const motsTabous = [
  "caca",
  "merde",
  "chier",
  "chiotte",
  "déféquer",
  "pipi",
  "diarrhée",
  "fiente",
  "déterger",
  "selles",
  "selle",
  "étron",
  "crottes",
  "crottin",
];

client.once("ready", () => {
  console.log(`💩 PoopBot activé en tant que ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const contenu = message.content.toLowerCase();

  if (motsTabous.some((mot) => contenu.includes(mot))) {
    try {
      await message.react("💩");
    } catch (err) {
      console.error("Erreur de réaction 💩 :", err);
    }
  }
});

client.login(process.env.TOKEN);
