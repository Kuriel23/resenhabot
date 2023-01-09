const discord = require("discord.js");

module.exports = async (client, interaction) => {
  let embed = new discord.MessageEmbed()
    .setColor(client.cor)
    .setTimestamp(new Date())
    .setTitle(`Diversão | Resenha`)
    .setDescription(
      client.commands
        .filter((command) => command.hidden != true)
        .filter((command) => command.category === "Diversão")
        .map(
          (command) =>
            `__${command.name.toUpperCase()}__\n**${
              command.description
            }** ${
              command.aliases.length >= 1
                ? `\nAlternativas: *${command.aliases.join(
                    ", "
                  )}*`
                : ""
            }`
        )
        .join("\n\n")
    );
  interaction.reply({ embeds: [embed] });
};
