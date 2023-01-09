const discord = require("discord.js");

module.exports = {
  name: "redeem",
  aliases: ["code", "redeemcode", "resgatar", "resgate"],
  description: "Resgate seu vip por um código",
  category: "Misc",
  cooldown: 0,
  run: async (client, message, args) => {
    if (!args && args[0].length >= 8)
      return message.channel.send({
        content: "Você precisa introduzir uma chave válida.",
      });

    client.db.Key.findOne({ _id: args[0] }, async function (err, doc) {
      if (doc) {
        if (86400000 - (Date.now() - doc.date) < 0) {
          client.db.Key.findByIdAndDelete(args[0], function (err) {
            0;
          });
          return message.channel.send({
            content: "Esta chave expirou ou está inválida",
          });
        }

        const embed = new discord.MessageEmbed()
          .setTitle("Chave ativada!")
          .addField("Tipo de chave:", doc.type, true)
          .setColor(config.color)
          .setFooter({
            text: `Solicitado por ${message.author.username} | Feito por: kurieldev.tk`,
            iconURL: message.author.displayAvatarURL({
              dynamic: true,
            }),
          })
          .setTimestamp(message.createdAt);

        message.channel.send({ embeds: [embed] });
        await message.guild.roles.fetch();
        if (doc.type === "Vip Esmeralda") {
          let role = message.guild.roles.cache.find(
            (role) => role.name === "Vip"
          ); // Pode usar o id também
          message.member.roles.add(role);
        } else if (doc.type === "Vip Obsidian") {
          let role = message.guild.roles.cache.find(
            (role) => role.name === "Vip"
          );
          message.member.roles.add(role);
        } else if (doc.type === "Vip Netherite") {
          let role = message.guild.roles.cache.find(
            (role) => role.name === "Vip"
          );
          message.member.roles.add(role);
        } else if (doc.type === "Vip Cosmun") {
          let role = message.guild.roles.cache.find(
            (role) => role.name === "Vip"
          );
          message.member.roles.add(role);
        } else if (doc.type === "Vip Ametista") {
          let role = message.guild.roles.cache.find(
            (role) => role.name === "Vip"
          );
          message.member.roles.add(role);
        }

        client.db.Key.findByIdAndDelete(args[0], function (err) {
          0;
        });
      } else if (!doc) {
        message.channel.send({
          content: "Esta chave expirou ou está inválida.",
        });
      }
    });
  },
};
