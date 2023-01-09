const discord = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  name: "loja",
  aliases: ["shop"],
  description: "Compre ou venda itens.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
            const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('shop')
					.setPlaceholder('Selecione uma ação')
					.addOptions([
						{
							label: 'Comprar itens',
							description: 'Compre itens para melhorar o seu equipamento',
							value: 'buy',
							emoji: {
								name: '🛒'
							}
						},
						{
							label: 'Vender itens',
							description: 'Venda itens para ganhar alguma grana',
							value: 'sell',
							emoji: {
								name: '💰'
							}
						}
					]),
			);
            return message.reply({content: "Bem-vindo ao shopping, o que você deseja?", components: [row]})
      } else {
        new client.db.Users({
          _id: message.author.id
        }).save();
        let embc = new discord.MessageEmbed()
          .setTitle(`» Novo registro executado, use novamente o comando.`)
          .setColor(client.cor);
        return message.reply({ embeds: [embc] });
      }
    });
  },
};
