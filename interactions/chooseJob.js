module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  client.db.Users.findOne({ _id: interaction.user.id }, function (err, doc) {
    if (doc.job != "Desempregado") return 0;
    if (interaction.values[0] === "empresario") {
      doc.job = "Empresário";
      doc.save();
      interaction.channel.send({
        content: "Você agora está trabalhando como Empresário",
      });
    }
    if (interaction.values[0] === "mod") {
      doc.job = "Moderador do Discord";
      doc.save();
      interaction.channel.send({
        content: "Você agora está trabalhando como Moderador do Discord",
      });
    }
    if (interaction.values[0] === "pescador") {
      doc.job = "Pescador";
      doc.save();
      interaction.channel.send({
        content: "Você agora está trabalhando como Pescador",
      });
    }
    if (interaction.values[0] === "policial") {
      doc.job = "Policial";
      doc.save();
      interaction.channel.send({
        content: "Você agora está trabalhando como Policial",
      });
    }
    if (interaction.values[0] === "medico") {
      doc.job = "Médico";
      doc.save();
      interaction.channel.send({
        content: "Você agora está trabalhando como Médico",
      });
    }
  });
};
