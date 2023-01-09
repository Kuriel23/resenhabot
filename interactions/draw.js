module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  client.db.Users.findOne({ _id: interaction.user.id }, function (err, doc) {
    if (interaction.values[0] === "tudo") {
      doc.coins += doc.bank;
      interaction.channel.send({
        content: `Você levantou ${doc.bank.toLocaleString(
          "pt-BR"
        )} moedas para a carteira`,
      });
      doc.bank -= doc.bank;
      doc.save();
    }
    if (interaction.values[0] === "valor") {
      interaction.channel.send({
        content: "Qual o valor que você deseja?",
      });
      const filter = (m) => m.author.id === interaction.user.id;
      interaction.channel
        .awaitMessages({
          filter,
          time: 60000,
          max: 1,
        })
        .then((collected) => {
          if (isNaN(parseInt(collected.first().content)))
            return interaction.channel.send({
              content: `Você não digitou um número para o levantamento!`,
            });
          let valor = parseInt(collected.first().content);
          if (doc.bank >= valor) {
            doc.coins += parseInt(collected.first().content);
            interaction.channel.send({
              content: `Você levantou ${collected
                .first()
                .content.toLocaleString("pt-BR")} moedas para a carteira`,
            });
            doc.bank -= parseInt(collected.first().content);
            doc.save();
          } else {
            interaction.channel.send({
              content: "Você não tem esse dinheiro.",
            });
          }
        })
        .catch((collected) => {
          return 0;
        });
    }
  });
};
