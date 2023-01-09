module.exports = async (client, message) => {
  if (
    message.member.roles.cache.find((role) =>
      role.name.includes("Recepcionista")
    )
  ) {
    client.channels.cache.get("964175520772284488").send({
      content: `${message.author}, você acaba de ganhar mais 1 ponto!`,
    });
  }
};
