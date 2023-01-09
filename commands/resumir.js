module.exports = {
  name: "resumir",
  aliases: ["resume", "r"],
  description: "Resuma a pausa atual.",
  category: "Música",
  run: async (client, message, args) => {
    const queue = client.player.getQueue(message.guild.id);

    if (!queue)
      return message.channel.send({
        content: `${message.author}, sem música a tocar atualmente!`,
      });

    const success = queue.setPaused(false);

    return message.channel.send({
      content: success
        ? `**${queue.current.title}**, a música começou a tocar novamente.`
        : `${message.author}, aconteceu algo de errado.`,
    });
  },
};
