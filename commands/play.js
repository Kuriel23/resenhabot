const { QueryType, QueueRepeatMode } = require('discord-player');

module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Toque alguma música.",
  category: "Música",
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send({
        content: `${message.author}, escreva o nome da música que procura.`,
      });

    const res = await client.player.search(args.join(" "), {
      requestedBy: message.member,
      searchEngine: QueryType.AUTO,
    });

    if (!res || !res.tracks.length)
      return message.channel.send({
        content: `${message.author}, sem resultados encontrados!`,
      });

    const queue = await client.player.createQueue(message.guild, {
      metadata: message.channel,
    });

    try {
      if (!queue.connection) await queue.connect(message.member.voice.channel);
    } catch {
      await client.player.deleteQueue(message.guild.id);
      return message.channel.send({
        content: `${message.author}, Não posso entrar no seu canal.`,
      });
    }

    await message.channel.send({
      content: `Sua ${res.playlist ? "playlist foi carregada" : `música ${res.tracks[0].title} foi adicionada com sucesso`} ... 🎧`,
    });

    res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

    if (!queue.playing) await queue.play();
    queue.setRepeatMode(QueueRepeatMode.OFF);
  },
};
