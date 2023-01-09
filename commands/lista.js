const discord = require("discord.js");

module.exports = {
  name: "lista",
  aliases: ["queue", "q"],
  description: "Veja a lista de músicas que ainda têm para tocar.",
  category: "Música",
  run: async (client, message, args) => {
    const queue = client.player.getQueue(message.guild.id);

    if (!queue || !queue.playing)
      return message.channel.send({
        content: `${message.author}, não tem uma música atualmente a tocar!`,
      });

    if (!queue.tracks[0])
      return message.channel.send({
        content: `${message.author}, Sem músicas após a atual.`,
      });

    const embed = new discord.MessageEmbed()
      .setColor(client.cor)
      .setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }))
      .setTitle(`Lista de Músicas - ${message.guild.name}`);

    const tracks = queue.tracks.map(
      (track, i) =>
        `**${i + 1}** - ${track.title} | ${track.author} (Pedido por <@${
          track.requestedBy.id
        }>)`
    );

    const songs = queue.tracks.length;
    const nextSongs =
      songs > 5
        ? `E **${songs - 5}** outras músicas...`
        : `Estão **${songs}** músicas na lista.`;

    embed.setDescription(
      `Atualmento Tocando: \`${queue.current.title}\`\n\n${tracks
        .slice(0, 5)
        .join("\n")}\n\n${nextSongs}`
    );

    embed.setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
