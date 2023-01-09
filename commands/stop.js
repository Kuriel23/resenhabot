module.exports = {
  name: "stop",
  aliases: ["parar"],
  description: "Parar a música atual.",
  category: "Música",
  run: async (client, message, args) => {
    const queue = client.player.getQueue(message.guild.id);

    if (!queue || !queue.playing)
      return message.channel.send({
        content: `${message.author}, sem música atualmente!`,
      });

    const success = queue.setPaused(true);

    return message.channel.send({
      content: success
        ? `A atual música **${queue.current.title}** foi parada`
        : `${message.author}, algo errado aconteceu.`,
    });
  },
};
