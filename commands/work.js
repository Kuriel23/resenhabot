const discord = require("discord.js");
const ms = require("parse-ms-2");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  name: "work",
  aliases: ["trabalhar"],
  description: "Trabalhe para ganhar algum dinheiro extra.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        const delayTime = 28800000; // Tempo em milisegundos de cooldown
        if (delayTime - (Date.now() - doc.workCooldown) > 0) {
          const _time = ms(delayTime - (Date.now() - doc.workCooldown));
          let emba = new discord.MessageEmbed()
            .setTitle(
              `» Espere: ${_time.hours}h, ${_time.minutes}m, e ${_time.seconds}s para trabalhar.`
            )
            .setColor(client.cor);
          return message.reply({ embeds: [emba] });
        } else {
          if (doc.job === "Desempregado") {
            const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('jobs')
					.setPlaceholder('Selecione o seu emprego')
					.addOptions([
						{
							label: 'Empresário',
							description: 'Exerça uma função económica numa empresa',
							value: 'empresario',
							emoji: {
								name: '👨‍💼'
							}
						},
						{
							label: 'Moderador do Discord',
							description: 'Modere a comunidade inteira do Discord',
							value: 'mod',
							emoji: {
								name: '🧑‍💻'
							}
						},
						{
							label: 'Pescador',
							description: 'Trabalhe como pescador',
							value: 'pescador',
							emoji: {
								name: '🎣'
							}
						},
            {
							label: 'Policial',
							description: 'Prenda alguns criminosos nesta cidade.',
							value: 'policial',
							emoji: {
								name: '👮‍♂️'
							}
						},
            {
							label: 'Médico',
							description: 'Cure os seus pacientes',
							value: 'medico',
							emoji: {
								name: '🩺'
							}
						},
					]),
			);
            return message.reply({content: "Escolha um dos empregos seguintes", components: [row]})
          }
          let value;
          if (doc.job === "Moderador do Discord") {
            value = 12000
          } else if (doc.job === "Empresário") {
            value = 10000
          } else if (doc.job === "Pescador") {
            value = 7000
            let itens = [
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
            let peixe2 = itens[Math.floor(Math.random() * itens.length)]
            let peixe1 = itens[Math.floor(Math.random() * itens.length)]
            if (peixe1 === "Salmão") {
              doc.fishinv.salmon += 1;
            } else if (peixe1 === "Peixe Palhaço") {
              doc.fishinv.clownfish += 1;
            } else if (peixe1 === "Peixe Normal") {
              doc.fishinv.normalfish += 1;
            } else if (peixe1 === "Baiacu") {
              doc.fishinv.pufferfish += 1;
            } else if (peixe1 === "Peixe Elétrico") {
              doc.fishinv.electricfish += 1;
            } else if (peixe1 === "Peixe Dourado") {
              doc.fishinv.goldenfish += 1;
            } else if (peixe1 === "Peixe Encantado") {
              doc.fishinv.enchantedfish += 1;
            } else if (peixe1 === "Peixe Elétrico Dourado") {
              doc.fishinv.goldenelectricfish += 1;
            } else if (peixe1 === "Peixe Espada") {
              doc.fishinv.swordfish += 1;
            } else if (peixe1 === "Peixe Celestial") {
              doc.fishinv.celestialfish += 1;
            } else if (peixe1 === "Peixe Cobra Dourada") {
              doc.fishinv.goldensnakefish += 1;
            }
            if (peixe2 === "Salmão") {
              doc.fishinv.salmon += 1;
            } else if (peixe2 === "Peixe Palhaço") {
              doc.fishinv.clownfish += 1;
            } else if (peixe2 === "Peixe Normal") {
              doc.fishinv.normalfish += 1;
            } else if (peixe2 === "Baiacu") {
              doc.fishinv.pufferfish += 1;
            } else if (peixe2 === "Peixe Elétrico") {
              doc.fishinv.electricfish += 1;
            } else if (peixe2 === "Peixe Dourado") {
              doc.fishinv.goldenfish += 1;
            } else if (peixe2 === "Peixe Encantado") {
              doc.fishinv.enchantedfish += 1;
            } else if (peixe2 === "Peixe Elétrico Dourado") {
              doc.fishinv.goldenelectricfish += 1;
            } else if (peixe2 === "Peixe Espada") {
              doc.fishinv.swordfish += 1;
            } else if (peixe2 === "Peixe Celestial") {
              doc.fishinv.celestialfish += 1;
            } else if (peixe2 === "Peixe Cobra Dourada") {
              doc.fishinv.goldensnakefish += 1;
            }

            message.reply({content: `Você pescou 1 ${peixe1} e 1 ${peixe2}`})
          } else if (doc.job === "Policial") {
            value = 12000
          } else if (doc.job === "Médico") {
            value = 15000
          }
          doc.coins += value;
          doc.workCooldown = Date.now();
          let embb = new discord.MessageEmbed()
            .setTitle(`» Você trabalhou e ganhou ${value} moedas.`)
            .setColor(client.cor);
          message.reply({ embeds: [embb] });
          doc.save();
        }
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
