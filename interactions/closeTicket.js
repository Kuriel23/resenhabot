const discord = require("discord.js");

module.exports = async (client, interaction) => {
  let name = await client.channels.fetch(interaction.channel.id).then((channel) => { return channel.name})
  client.db.Ticket.findOne(
    {
      _id: name,
    },
    function (err, doc) {
      if (doc) {
        interaction.channel.permissionOverwrites.delete(doc.userID);

        let embed = new discord.MessageEmbed()
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setDescription(
            `Ticket foi fechado!\nGostariam de deletar o ticket ou abrir o ticket novamente?`
          );

        let botao = new discord.MessageActionRow()
          .addComponents(
            new discord.MessageButton()
              .setCustomId("tf")
              .setEmoji("🗑️")
              .setLabel("Deletar Ticket")
              .setStyle("SECONDARY")
          )
          .addComponents(
            new discord.MessageButton()
              .setCustomId("ta")
              .setEmoji("📂")
              .setLabel("Abrir Novamente Ticket")
              .setStyle("SECONDARY")
          );

        interaction.channel.send({ embeds: [embed], components: [botao] });
      }
    }
  );
};
