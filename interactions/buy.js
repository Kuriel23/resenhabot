module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  client.db.Users.findOne({ _id: interaction.user.id }, function (err, doc) {
    if (interaction.values[0] === "pesca") {
      let custo = 1000;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.itemsinv.fishrod = true;
        interaction.channel.send({
          content: `Você comprou uma Vara de pescar por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "pescarara") {
      let custo = 2000;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.itemsinv.fishrodrare = true;
        interaction.channel.send({
          content: `Você comprou uma Vara de pescar Rara por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "pescaencantada") {
      let custo = 4000;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.itemsinv.fishrodenchanted = true;
        interaction.channel.send({
          content: `Você comprou uma Vara de pescar Encantada por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "pescasuprema") {
      let custo = 8000;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.itemsinv.fishrodsupreme = true;
        interaction.channel.send({
          content: `Você comprou uma Vara de pescar Suprema por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "normal") {
      let custo = 1200;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.fishinv.normalfish += 1;
        interaction.channel.send({
          content: `Você comprou um peixe normal por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "palhaco") {
      let custo = 1500;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.fishinv.clownfish += 1;
        interaction.channel.send({
          content: `Você comprou um peixe palhaço por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
    if (interaction.values[0] === "salmao") {
      let custo = 2000;
      if (doc.coins >= custo) {
        doc.coins -= custo;
        doc.fishinv.salmon += 1;
        interaction.channel.send({
          content: `Você comprou um salmão por ${custo} moedas`,
        });
        doc.save();
      } else {
        interaction.channel.send({
          content:
            "Você não tem dinheiro (carteira) suficiente para esta compra",
        });
      }
    }
  });
};
