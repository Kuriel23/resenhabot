module.exports = {
  name: "pular",
  aliases: ["skip", "s"],
  description: "Pule a música atual para a próxima.",
  category: "Música",
  run: async (client, message, args) => {
    const queue = client.player.getQueue(message.guild.id);
 
    if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, Não tem músicas a tocar atualmente!` });

    const success = queue.skip();

    return message.channel.send({ content: success ? `**${queue.current.title}**, música pulada com sucesso` : `${message.author}, algo aconteceu de errado.` });
  },
};
