module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  client.db.Users.findOne({ _id: interaction.user.id }, function (err, doc) {
    if (interaction.values[0] === "lixo") {
      let valor = 1000;
      doc.coins += doc.fishinv.trash * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.trash} lixo reciclável por ${
          doc.fishinv.trash * valor
        } moedas`,
      });
      doc.fishinv.trash = 0;
      doc.save();
    }
    if (interaction.values[0] === "normal") {
      let valor = 1200;
      doc.coins += doc.fishinv.normalfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.normalfish} peixe normal por ${
          doc.fishinv.normalfish * valor
        } moedas`,
      });
      doc.fishinv.normalfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "palhaco") {
      let valor = 1500;
      doc.coins += doc.fishinv.clownfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.clownfish} peixe palhaço por ${
          doc.fishinv.clownfish * valor
        } moedas`,
      });
      doc.fishinv.clownfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "salmao") {
      let valor = 2000;
      doc.coins += doc.fishinv.salmon * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.salmon} salmão por ${
          doc.fishinv.salmon * valor
        } moedas`,
      });
      doc.fishinv.salmon = 0;
      doc.save();
    }
    if (interaction.values[0] === "baiacu") {
      let valor = 2200;
      doc.coins += doc.fishinv.pufferfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.pufferfish} baiacu por ${
          doc.fishinv.pufferfish * valor
        } moedas`,
      });
      doc.fishinv.pufferfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "eletrico") {
      let valor = 2500;
      doc.coins += doc.fishinv.electricfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.electricfish} peixe elétrico por ${
          doc.fishinv.electricfish * valor
        } moedas`,
      });
      doc.fishinv.electricfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "dourado") {
      let valor = 3000;
      doc.coins += doc.fishinv.goldenfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.goldenfish} peixe dourado por ${
          doc.fishinv.goldenfish * valor
        } moedas`,
      });
      doc.fishinv.goldenfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "encantado") {
      let valor = 3200;
      doc.coins += doc.fishinv.enchantedfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${
          doc.fishinv.enchantedfish
        } peixe encantado por ${doc.fishinv.enchantedfish * valor} moedas`,
      });
      doc.fishinv.enchantedfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "eletricodourado") {
      let valor = 3500;
      doc.coins += doc.fishinv.goldenelectricfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${
          doc.fishinv.goldenelectricfish
        } peixe elétrico dourado por ${
          doc.fishinv.goldenelectricfish * valor
        } moedas`,
      });
      doc.fishinv.goldenelectricfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "espada") {
      let valor = 4000;
      doc.coins += doc.fishinv.swordfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${doc.fishinv.swordfish} peixe espada por ${
          doc.fishinv.swordfish * valor
        } moedas`,
      });
      doc.fishinv.swordfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "celestial") {
      let valor = 4200;
      doc.coins += doc.fishinv.celestialfish * valor;
      interaction.channel.send({
        content: `Você vendeu ${
          doc.fishinv.celestialfish
        } peixe celestial por ${doc.fishinv.celestialfish * valor} moedas`,
      });
      doc.fishinv.celestialfish = 0;
      doc.save();
    }
    if (interaction.values[0] === "cobradourada") {
      let valor = 4500;
      doc.coins += doc.fishinv.goldensnakefish * valor;
      interaction.channel.send({
        content: `Você vendeu ${
          doc.fishinv.goldensnakefish
        } peixe cobra dourada por ${
          doc.fishinv.goldensnakefish * valor
        } moedas`,
      });
      doc.fishinv.goldensnakefish = 0;
      doc.save();
    }
  });
};
