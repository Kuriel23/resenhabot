const discord = require("discord.js");

module.exports = {
  name: "ticket", // Coloque o nome do comando do arquivo
  aliases: ["ticket"], // Coloque sinônimos aqui
  description: "Criar Tickets.",
  category: "ticket",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      message.reply(`Você não possui permissão para utilizar este comando.`);
    } else {
      let embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor({
          name: message.guild.name,
          iconURL: message.guild.iconURL({ dynamic: true }),
        })
        .setFooter({
          text: message.guild.name,
          iconURL: message.guild.iconURL({ dynamic: true }),
        })
        .setTimestamp(new Date())
        .setTitle(`Atendimento | Resenha`)
        .setDescription(
          `\`Abra um ticket reagindo com 📩\`\nSó abra um ticket se você estiver precisando de suporte.`
        );

      let botao = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
          .setCustomId("t")
          .setEmoji("📩")
          .setLabel("Criar um Ticket")
          .setStyle("SECONDARY")
      );

      message.channel
        .send({ embeds: [embed], components: [botao] })
        .then(() => {
          message.delete();
        });
    }
  },
};
