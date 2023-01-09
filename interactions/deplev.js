const discord = require('discord.js');

module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  if (interaction.values[0] === "depositar") {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageSelectMenu()
        .setCustomId("deposit")
        .setPlaceholder("Selecione a Quantia")
        .addOptions([
          {
            label: "Depositar Tudo",
            description: "Todo seu dinheiro fica no banco.",
            value: "tudo",
            emoji: {
              name: "💰",
            },
          },
          {
            label: "Depositar valor customizado",
            description: "Você escolhe a quantia que você quer depositar.",
            value: "valor",
            emoji: {
              name: "💵",
            },
          },
        ])
    );
    interaction.channel.send({
      content: "Quanto você quer depositar?",
      components: [row],
    });
  }
  if (interaction.values[0] === "levantar") {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageSelectMenu()
        .setCustomId("draw")
        .setPlaceholder("Selecione a Quantia")
        .addOptions([
          {
            label: "Levantar Tudo",
            description: "Todo seu dinheiro fica na carteira.",
            value: "tudo",
            emoji: {
              name: "💰",
            },
          },
          {
            label: "Levantar valor customizado",
            description: "Você escolhe a quantia que você quer levantar.",
            value: "valor",
            emoji: {
              name: "💵",
            },
          },
        ])
    );
    interaction.channel.send({
      content: "Quanto você quer levantar?",
      components: [row],
    });
  }
};
