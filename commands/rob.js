const discord = require("discord.js");
const ms = require("parse-ms-2");

module.exports = {
  name: "rob",
  aliases: ["roubar"],
  description: "Roube alguma pessoa",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        let mencionado = message.mentions.users.first();
        if (!message.mentions.users.first())
          return message.reply({
            content: "Você deve mencionar uma pessoa pra roubar",
          });
        if (mencionado.id === message.author.id)
          return message.reply({ content: "Você deve mencionar alguém!" });
        if (mencionado.bot)
          return message.reply({
            content: "Você deve mencionar uma pessoa e não um BOT!",
          });
        const delayTime = 14400000;
        if (delayTime - (Date.now() - doc.robCooldown) > 0) {
          const _time = ms(delayTime - (Date.now() - doc.robCooldown));
          let emba = new discord.MessageEmbed()
            .setTitle(
              `» Espere: ${_time.hours}h, ${_time.minutes}m, e ${_time.seconds}s para roubar alguém.`
            )
            .setColor(client.cor);
          return message.reply({ embeds: [emba] });
        } else {
          client.db.Users.findOne(
            { _id: mencionado.id },
            function (err, roubado) {
              if (roubado) {
                let dinheiroroubado = roubado.coins * 0.7;
                doc.coins += dinheiroroubado;
                roubado.coins -= dinheiroroubado;
                doc.robCooldown = Date.now();
                let embb = new discord.MessageEmbed()
                  .setTitle(
                    `» Você roubou ${dinheiroroubado.toLocaleString(
                      "pt-BR"
                    )} moedas dessa pessoa.`
                  )
                  .setColor(client.cor);
                message.reply({ embeds: [embb] });
                doc.save();
                roubado.save();
              } else {
                new client.db.Users({
                  _id: mencionado.id,
                }).save();
                let embc = new discord.MessageEmbed()
                  .setTitle(
                    `» Este usuário teve um novo registro agora, recomendo buscar outra pessoa para roubar o dinheiro.`
                  )
                  .setColor(client.cor);
                return message.reply({ embeds: [embc] });
              }
            }
          );
        }
      } else {
        new client.db.Users({
          _id: message.author.id,
        }).save();
        let embc = new discord.MessageEmbed()
          .setTitle(`» Novo registro executado, use novamente o comando.`)
          .setColor(client.cor);
        return message.reply({ embeds: [embc] });
      }
    });
  },
};
