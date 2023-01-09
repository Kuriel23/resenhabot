module.exports = {
    name: "enviarmsg",
    aliases: [],
    description: "Comando apenas para enviar mensagem ao lucas por uso dele.",
    category: "Moderação",
    run: async (client, message, args) => {
        client.users.fetch('656450277720719383', false).then((user) => {
            user.send({ content: "Alguém usou este comando aqui." });
           });
  
    },
  };
  