module.exports = async (client, message) => {
  if (message.author.bot) return 0;

  if (message.channel.id === "") {
    require("./messages/talkwithbot")(client, message);
  }
  if (message.member.roles.cache.find((role) => role.name.includes("Mov"))) {
    require("./messages/movpoints")(client, message);
  }
  /* require("./messages/givevip")(client, message)
   */
  if (!message.content.includes("talk with me")) {
    require("./messages/mention")(client, message);
  }

  if (
    message.content.toLowerCase().includes("bem-vindo") ||
    message.content.toLowerCase().includes("bem vindo") ||
    message.content.toLowerCase().includes("welcome")
  ) {
    require("./messages/welcome")(client, message);
  }

  if (
    message.content.includes("<@656450277720719383>") ||
    message.content.includes("<!@656450277720719383>")
  ) {
    return message.reply("Mensagem aqui");
  }

  // A parte abaixo pode causar interferência caso o bot tenha um handle para comandos já

  let prefix = "r.";

  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  )
    return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmda = args.shift().toLowerCase();
  let command =
    client.commands.get(cmda) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(cmda));
  if (!command) return;

  try {
    command.run(client, message, args);
  } catch (error) {
    message.reply({ content: `Houve um erro ao executar esse comando!` });
  }
};
