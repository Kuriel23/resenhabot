const discord = require("discord.js");
const ms = require("parse-ms-2");

module.exports = {
  name: "daily",
  aliases: ["diário"],
  description: "Resgate algum dinheiro diariamente",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      let value = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      if (doc) {
        const delayTime = 43200000;
        if (delayTime - (Date.now() - doc.dailyCooldown) > 0) {
          const _time = ms(delayTime - (Date.now() - doc.dailyCooldown));
          let emba = new discord.MessageEmbed()
            .setTitle(
              `» Espere: ${_time.hours}h, ${_time.minutes}m, e ${_time.seconds}s para coletar a sua bufunfa diária.`
            )
            .setColor(client.cor);
          return message.reply({ embeds: [emba] });
        } else {
          doc.coins += value;
          doc.dailyCooldown = Date.now();
          let embb = new discord.MessageEmbed()
            .setTitle(`» Você resgatou ${value} moedas no daily.`)
            .setColor(client.cor);
          message.reply({ embeds: [embb] });
          doc.save();
        }
      } else {
        new client.db.Users({
          _id: message.author.id,
          dailyCooldown: Date.now(),
          coins: value,
        }).save();
        let embc = new discord.MessageEmbed()
          .setTitle(`» Você resgatou ${value} moedas no daily.`)
          .setColor(client.cor);
        return message.reply({ embeds: [embc] });
      }
    });
  },
};
