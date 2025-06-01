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
  "chiottes",
  "chiasse",
  "déféquer",
  "déjection",
  "déjections",
  "pipi",
  "popo",
  "diarrhée",
  "diarrhee",
  "fiente",
  "crottes",
  "crotte",
  "crottin",
  "étron",
  "étrons",
  "fessée",
  "trou du cul",
  "anus",
  "anulingus",
  "prout",
  "pet",
  "péter",
  "pets",
  "selles",
  "selle",
  "déterger",
  "grosse commission",
  "besoin pressant",
  "aller aux toilettes",
  "aller aux chiottes",
  "aller chier",
  "caguer",
  "se vider",
  "se torcher",
  "torche-cul",
  "papier toilette",
  "papier de merde",
  "s'en chier",
  "avoir la chiasse",
  "se faire dessus",
  "se faire caca dessus",
  "pantalon sale",
  "saleté",
  "dégueulasse"
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
