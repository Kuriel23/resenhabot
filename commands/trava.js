module.exports = {
  name: "trava",
  aliases: [],
  description: "Comando apenas para x cargo.",
  category: "Moderação",
  run: async (client, message, args) => {
    if(!message.member.roles.cache.some(role => role.id === '964192767729336400')) return message.channel.send({ content: "Você não está permitido a usar este comando." });

  },
};
