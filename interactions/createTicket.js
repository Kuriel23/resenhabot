const discord = require("discord.js");

module.exports = async (client, interaction) => {
  let tagger = interaction.user.tag;
  if (interaction.guild.channels.cache.find((c) => c.name === `${tagger}`)) {
    let c = interaction.guild.channels.cache.find(
      (c) => c.name === `${tagger}`
    );
    interaction.reply({
      content: `Você já possui um ticket aberto em ${c}.`,
      ephemeral: true,
    });
  } else {
    interaction.guild.channels
      .create(`${tagger}`, {
        type: "GUILD_TEXT",
        //parent: "",
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: interaction.user.id,
            allow: [
              "VIEW_CHANNEL",
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "ADD_REACTIONS",
            ],
          },
          /*{
                id: "888077423160213545",
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "ATTACH_FILES",
                  "ADD_REACTIONS",
                ],
              },
              {
                id: "888077398812274778",
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "ATTACH_FILES",
                  "ADD_REACTIONS",
                ],
              },
              {
                id: "898139862560047155",
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "ATTACH_FILES",
                  "ADD_REACTIONS",
                ],
              },
              {
                id: "885207740371337258",
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "ATTACH_FILES",
                  "ADD_REACTIONS",
                ],
              },*/
        ],
      })
      .then((c) => {
        interaction.reply({
          content: `Seu ticket foi aberto em ${c}.`,
          ephemeral: true,
        });

        let embed = new discord.MessageEmbed()
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setDescription(
            `Ohayo ${interaction.user.username}, boas vindas ao seu ticket!\nAguarde alguns instantes para receber o suporte.`
          );

        let botao = new discord.MessageActionRow().addComponents(
          new discord.MessageButton()
            .setCustomId("ft")
            .setEmoji("🔒")
            .setLabel("Fechar Ticket")
            .setStyle("SECONDARY")
        );

        c.send({ embeds: [embed], components: [botao] }).then((msg) =>
          msg.pin()
        );
            new client.db.Ticket({
              _id: tagger.replace("#", "").toLowerCase(),
              userID: interaction.user.id,
            }).save()
      });
  }
};
