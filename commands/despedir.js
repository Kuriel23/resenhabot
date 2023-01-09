const discord = require("discord.js");

module.exports = {
  name: "despedir",
  aliases: ["fire"],
  description: "Fique desempregado.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        doc.job = "Desempregado";
        doc.save();
        return message.reply({ content: "Você foi despedido do seu trabalho!"})
      } else {
        new client.db.Users({
          _id: message.author.id
        }).save();
        let embc = new discord.MessageEmbed()
          .setTitle(`» Novo registro executado, use novamente o comando.`)
          .setColor(client.cor);
        return message.reply({ embeds: [embc] });
      }
    });
  },
};
