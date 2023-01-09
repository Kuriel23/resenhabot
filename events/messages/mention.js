module.exports = async (client, message) => {
  if (
    message.content.startsWith("<@" + client.user.id + ">") ||
    message.content.startsWith("<!@" + client.user.id + ">")
  ) {
    return message.reply(
      "Ohayo! Caso você não saiba meu prefixo, o mesmo é r."
    );
  }
};
