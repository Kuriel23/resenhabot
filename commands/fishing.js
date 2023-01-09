const discord = require("discord.js");

module.exports = {
  name: "fish",
  aliases: ["peixe", "pescar"],
  description: "Pesque peixes.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        let embnofishrod = new discord.MessageEmbed()
        .setTitle(`» Você não têm uma vara de pescar, compre uma na loja.`)
        .setColor(client.cor);

        if (doc.itemsinv.fishrodsupreme) {
          let itens = [
            "Lixo reciclável",
            "Salmão",
            "Peixe Palhaço",
            "Peixe Normal",
            "Baiacu",
            "Peixe Elétrico",
            "Peixe Dourado",
            "Peixe Encantado",
            "Peixe Elétrico Dourado",
            "Peixe Espada",
            "Peixe Celestial",
            "Peixe Cobra Dourada"
          ];

          let pescou = itens[Math.floor(Math.random() * itens.length)];

          if (pescou === "Lixo reciclável") {
            doc.fishinv.trash += 1;
          } else if (pescou === "Salmão") {
            doc.fishinv.salmon += 1;
          } else if (pescou === "Peixe Palhaço") {
            doc.fishinv.clownfish += 1;
          } else if (pescou === "Peixe Normal") {
            doc.fishinv.normalfish += 1;
          } else if (pescou === "Baiacu") {
            doc.fishinv.pufferfish += 1;
          } else if (pescou === "Peixe Elétrico") {
            doc.fishinv.electricfish += 1;
          } else if (pescou === "Peixe Dourado") {
            doc.fishinv.goldenfish += 1;
          } else if (pescou === "Peixe Encantado") {
            doc.fishinv.enchantedfish += 1;
          } else if (pescou === "Peixe Elétrico Dourado") {
            doc.fishinv.goldenelectricfish += 1;
          } else if (pescou === "Peixe Espada") {
            doc.fishinv.swordfish += 1;
          } else if (pescou === "Peixe Celestial") {
            doc.fishinv.celestialfish += 1;
          } else if (pescou === "Peixe Cobra Dourada") {
            doc.fishinv.goldensnakefish += 1;
          }
          doc.fishrodsupremebreak += 1;

          if (doc.fishrodsupremebreak >= 10) {
            doc.fishrodsupremebreak = 0;
            doc.itemsinv.fishrodsupreme = false;
          }

          doc.save();
          return message.reply({ content: "Você pescou um " + pescou });
        }

        else if (doc.itemsinv.fishrodenchanted) {
          let itens = [
            "Lixo reciclável",
            "Salmão",
            "Peixe Palhaço",
            "Peixe Normal",
            "Baiacu",
            "Peixe Elétrico",
            "Peixe Dourado",
            "Peixe Encantado",
            "Peixe Elétrico Dourado",
            "Peixe Espada",
          ];

          let pescou = itens[Math.floor(Math.random() * itens.length)];

          if (pescou === "Lixo reciclável") {
            doc.fishinv.trash += 1;
          } else if (pescou === "Salmão") {
            doc.fishinv.salmon += 1;
          } else if (pescou === "Peixe Palhaço") {
            doc.fishinv.clownfish += 1;
          } else if (pescou === "Peixe Normal") {
            doc.fishinv.normalfish += 1;
          } else if (pescou === "Baiacu") {
            doc.fishinv.pufferfish += 1;
          } else if (pescou === "Peixe Elétrico") {
            doc.fishinv.electricfish += 1;
          } else if (pescou === "Peixe Dourado") {
            doc.fishinv.goldenfish += 1;
          } else if (pescou === "Peixe Encantado") {
            doc.fishinv.enchantedfish += 1;
          } else if (pescou === "Peixe Elétrico Dourado") {
            doc.fishinv.goldenelectricfish += 1;
          } else if (pescou === "Peixe Espada") {
            doc.fishinv.swordfish += 1;
          }
          doc.fishrodenchantedbreak += 1;

          if (doc.fishrodenchantedbreak >= 10) {
            doc.fishrodenchantedbreak = 0;
            doc.itemsinv.fishrodenchanted = false;
          }

          doc.save();
          return message.reply({ content: "Você pescou um " + pescou });
        }

        else if (doc.itemsinv.fishrodrare) {
          let itens = [
            "Lixo reciclável",
            "Salmão",
            "Peixe Palhaço",
            "Peixe Normal",
            "Baiacu",
            "Peixe Elétrico",
            "Peixe Dourado",
          ];

          let pescou = itens[Math.floor(Math.random() * itens.length)];

          if (pescou === "Lixo reciclável") {
            doc.fishinv.trash += 1;
          } else if (pescou === "Salmão") {
            doc.fishinv.salmon += 1;
          } else if (pescou === "Peixe Palhaço") {
            doc.fishinv.clownfish += 1;
          } else if (pescou === "Peixe Normal") {
            doc.fishinv.normalfish += 1;
          } else if (pescou === "Baiacu") {
            doc.fishinv.pufferfish += 1;
          } else if (pescou === "Peixe Elétrico") {
            doc.fishinv.electricfish += 1;
          } else if (pescou === "Peixe Dourado") {
            doc.fishinv.goldenfish += 1;
          }
          doc.fishrodrarebreak += 1;

          if (doc.fishrodrarebreak >= 10) {
            doc.fishrodrarebreak = 0;
            doc.itemsinv.fishrodrare = false;
          }

          doc.save();
          return message.reply({ content: "Você pescou um " + pescou });
        }

        else if (doc.itemsinv.fishrod) {
          let itens = [
            "Lixo reciclável",
            "Salmão",
            "Peixe Palhaço",
            "Peixe Normal",
          ];

          let pescou = itens[Math.floor(Math.random() * itens.length)];

          if (pescou === "Lixo reciclável") {
            doc.fishinv.trash += 1;
          } else if (pescou === "Salmão") {
            doc.fishinv.salmon += 1;
          } else if (pescou === "Peixe Palhaço") {
            doc.fishinv.clownfish += 1;
          } else if (pescou === "Peixe Normal") {
            doc.fishinv.normalfish += 1;
          }
          doc.fishrodbreak += 1;

          if (doc.fishrodbreak >= 10) {
            doc.fishrodbreak = 0;
            doc.itemsinv.fishrod = false;
          }

          doc.save();
          return message.reply({ content: "Você pescou um " + pescou });
        } else return message.reply({ embeds: [embnofishrod] })
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
