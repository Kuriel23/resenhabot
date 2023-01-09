const ms = require("parse-ms-2");
const discord = require("discord.js");

module.exports = {
  name: "reviver",
  aliases: [],
  description: "Comando apenas para reviver.",
  category: "Moderação",
  run: async (client, message, args) => {
    message.delete();
    if (
      message.member.roles.cache.find((role) => role.name.includes("Mov")) ||
      message.member.roles.cache.find(
        (role) => role.id === "898139862560047155"
      ) ||
      message.member.roles.cache.find(
        (role) => role.id === "885207740371337258"
      ) ||
      message.member.roles.cache.find(
        (role) => role.id === "885207740371337257"
      )
    ) {
      client.db.Users.findOne(
        { _id: "656450277720719383" },
        function (err, doc) {
          if (doc) {
            const delayTime = 18000000;
            if (delayTime - (Date.now() - doc.dailyCooldown) > 0) {
              const _time = ms(delayTime - (Date.now() - doc.dailyCooldown));
              let emba = new discord.MessageEmbed()
                .setTitle(
                  `» Espere: ${_time.hours}h, ${_time.minutes}m, e ${_time.seconds}s para poder reviver o chat.`
                )
                .setColor(client.cor);
              return message.channel.send({ embeds: [emba] });
            } else {
              doc.dailyCooldown = Date.now();
              doc.save();
              client.users.fetch("354233941550694400", false).then((user) => {
                user.send({
                  content: `\`\`reviver\`\` - ${message.author.tag} (${message.author.id})`,
                });
              });
              message.channel.send({ content: "<@&...>" });
            }
          }
        }
      );
    }
  },
};
