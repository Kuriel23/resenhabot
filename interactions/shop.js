const discord = require('discord.js');

module.exports = async (client, interaction) => {
  await interaction.deferUpdate();
  if (interaction.values[0] === "buy") {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageSelectMenu()
        .setCustomId("buy")
        .setPlaceholder("Selecione o Item")
        .addOptions([
          {
            label: "Vara de pesca",
            description: "Custo: 1000",
            value: "pesca",
            emoji: {
              name: "🎣",
            },
          },
          {
            label: "Vara de pesca Rara",
            description: "Custo: 2000",
            value: "pescarara",
            emoji: {
              name: "🎣",
            },
          },
          {
            label: "Vara de pesca Encantada",
            description: "Custo: 4000",
            value: "pescaencantada",
            emoji: {
              name: "🎣",
            },
          },
          {
            label: "Vara de pesca Suprema",
            description: "Custo: 8000",
            value: "pescasuprema",
            emoji: {
              name: "🎣",
            },
          },
          {
            label: "Peixe normal",
            description: "Custo: 1200",
            value: "normal",
            emoji: {
              name: "🐟",
            },
          },
          {
            label: "Peixe Palhaço",
            description: "Custo: 1500",
            value: "palhaco",
            emoji: {
              name: "🐡",
            },
          },
          {
            label: "Salmão",
            description: "Custo: 2000",
            value: "salmao",
            emoji: {
              name: "🐠",
            },
          },
        ])
    );
    interaction.channel.send({
      content: "O que você quer comprar?",
      components: [row],
    });
  }
  if (interaction.values[0] === "sell") {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageSelectMenu()
        .setCustomId("sell")
        .setPlaceholder("Selecione o Item")
        .addOptions([
          {
            label: "Lixo reciclável",
            description: "Vale: 1000",
            value: "lixo",
            emoji: {
              name: "🗑️",
            },
          },
          {
            label: "Peixe normal",
            description: "Vale: 1200",
            value: "normal",
            emoji: {
              name: "🐟",
            },
          },
          {
            label: "Peixe Palhaço",
            description: "Vale: 1500",
            value: "palhaco",
            emoji: {
              name: "🤡",
            },
          },
          {
            label: "Salmão",
            description: "Vale: 2000",
            value: "salmao",
            emoji: {
              name: "🐠",
            },
          },
          {
            label: "Baiacu",
            description: "Vale: 2200",
            value: "baiacu",
            emoji: {
              name: "🐡",
            },
          },
          {
            label: "Peixe Elétrico",
            description: "Vale: 2500",
            value: "eletrico",
            emoji: {
              name: "⚡",
            },
          },
          {
            label: "Peixe Dourado",
            description: "Vale: 3000",
            value: "dourado",
            emoji: {
              name: "🥇",
            },
          },
          {
            label: "Peixe Encantado",
            description: "Vale: 3200",
            value: "encantado",
            emoji: {
              name: "📖",
            },
          },
          {
            label: "Peixe Elétrico Dourado",
            description: "Vale: 3500",
            value: "eletricodourado",
            emoji: {
              name: "🔌",
            },
          },
          {
            label: "Peixe Espada",
            description: "Vale: 4000",
            value: "espada",
            emoji: {
              name: "⚔️",
            },
          },
          {
            label: "Peixe Celestial",
            description: "Vale: 4200",
            value: "celestial",
            emoji: {
              name: "👼",
            },
          },
          {
            label: "Peixe Cobra Dourada",
            description: "Vale: 4500",
            value: "cobradourada",
            emoji: {
              name: "🐍",
            },
          },
        ])
    );
    interaction.channel.send({
      content: "O que você quer vender?",
      components: [row],
    });
  }
};
