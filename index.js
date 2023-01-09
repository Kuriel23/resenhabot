const discord = require("discord.js");
const { Player } = require("discord-player");
require("dotenv").config();

const client = new discord.Client({
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  intents: 32767,
  allowedMentions: {
    parse: ["users"],
    repliedUser: true,
  },
  cacheWithLimits: {
    MessageManager: {
      sweepInterval: 300,
      sweepFilter: discord.Sweepers.filterByLifetime({
        lifetime: 60,
        getComparisonTimestamp: (m) => m.editedTimestamp ?? m.createdTimestamp,
      }),
    },
  },
});

client.cor = "#8A2BE2";
client.db = require("./database");
client.ok = "https://i.imgur.com/01u54sR.png";
client.warn = "https://i.imgur.com/8gktqyJ.png";
client.err = "https://i.imgur.com/NGy07fZ.png";
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.logger = require("./Utils/logger");
client.player = new Player(client, {
  DJ: {
    enabled: false,
  },
  voiceConfig: {
    leaveOnEnd: true,
    autoSelfDeaf: true,

    leaveOnTimer: {
      status: false,
      time: 10000,
    },
  },

  maxVol: 100,
  loopMessage: false,

  discordPlayer: {
    ytdlOptions: {
      quality: "highestaudio",
      highWaterMark: 1 << 25,
    },
  },
});

["commands", "events"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on("error", (error) => client.logger.log(error, "error"));
client.on("warn", (info) => client.logger.log(info, "warn"));
/*process.on('unhandledRejection', error => client.logger.log("UNHANDLED_REJECTION\n" + error, "error"));
process.on('uncaughtException', error => {
    client.logger.log("UNCAUGHT_EXCEPTION\n" + error, "error");
    client.logger.log("Uncaught Exception foi detectado, reiniciando...", "info");
    process.exit(1);
});*/

client.login(process.env.token).catch(() => {
  client.logger.log("Token Inválido!", "warn");
});
