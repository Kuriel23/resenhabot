module.exports = {
  name: "leave",
  aliases: ["sair"],
  description: "Sair do canal e parar de tocar músicas.",
  category: "Música",
  run: async (client, message, args) => {
    const queue = client.player.getQueue(message.guild.id);

    if (!queue || !queue.playing)
      return message.channel.send({
        content: `${message.author}, sem música atualmente tocando!`,
      });

    queue.destroy();

    message.channel.send({
      content: `A música no servidor foi parada, te vejo no futuro!`,
    });
  },
};
