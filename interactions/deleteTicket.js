module.exports = async (client, interaction) => {
  let name = await client.channels.fetch(interaction.channel.id).then((channel) => { return channel.name})
  interaction
    .reply(
      `\\🔒 |${interaction.user}, esse ticket será deletado em \`5 segundos\`...`
    )
    .then(() => {
      setTimeout(() => {
        interaction.channel.delete();
      }, 5000);
    });
    client.db.Ticket.deleteMany({_id: name}, function (err, _) {
      if (err) {
          return console.log(err);
      }
  });
};
