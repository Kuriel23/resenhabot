const discord = require("discord.js");

module.exports = async (client, interaction) => {
  client.db.Ticket.findOne({ _id: interaction.channel.name }, function (err, doc) {
    if (doc) {
      interaction.channel.permissionOverwrites.create(doc.userID, { 
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              ATTACH_FILES: true,
              ADD_REACTIONS: true,
      });

      interaction.channel.send({ content: "Ticket reaberto com sucesso." });
    }
  });
};
