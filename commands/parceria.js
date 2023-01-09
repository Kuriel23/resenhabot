const discord = require("discord.js");

module.exports = {
  name: "parceria",
  aliases: ["p"],
  description: "meh.",
  category: "Parcerias",
  run: async (client, message, args) => {
    message.channel.send("Enviado seu dlç!");
    client.channels.cache
      .get("885296306321494026")
      .send({ content: args.join(" ").replace(/(@here|@everyone)/g, "")+"\n\n<@&939607052513316914>" });
  },
};
