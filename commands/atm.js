const discord = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  name: "atm",
  aliases: ["saldo", "carteira", "bank", "banco"],
  description: "Veja o seu saldo.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        const row = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("deplev")
            .setPlaceholder("Selecione alguma ação")
            .addOptions([
              {
                label: "Depositar",
                description: "Carteira => Banco",
                value: "depositar",
                emoji: {
                  name: "🏦",
                },
              },
              {
                label: "Levantar",
                description: "Banco => Carteira",
                value: "levantar",
                emoji: {
                  name: "👝",
                },
              },
            ])
        );
        message.channel.send({
          content: `:bank: **Banco**: ${doc.bank.toLocaleString(
            "pt-BR"
          )} moedas\n:pouch: **Carteira**: ${doc.coins.toLocaleString(
            "pt-BR"
          )} moedas`,
          components: [row]
        });
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
