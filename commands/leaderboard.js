const discord = require("discord.js");

module.exports = {
  name: "leaderboard",
  aliases: ["top"],
  description: "Veja o Top 10 pessoas mais ricas da minha economia.",
  category: "Economia",
  run: async (client, message, args) => {
    client.db.Users.find({}).sort({'bank': 'descending'}).limit(15).exec(async (err, res) => {
        if (err) console.log(err);
        let embed = new discord.MessageEmbed()
          .setTitle("🏆 » TOP 15 MAIS RICOS")
          .setColor(client.cor)
        if (res.length === 0) {
          embed.addField("Sem data encontrada", "Por favor use r.daily para ganhar moedas")
        } else if (res.length < 15) {
          for (i = 0; i < res.length; i++) {
            let member = await client.users.fetch(res[i]._id) || "Usuário saiu do servidor"
            if (member === "Usuário saiu do servidor") {
              embed.addField(`${i + 1}. ???`, `**Moedas**: ${res[i].coins.toLocaleString('pt-BR')}\n**Banco**: ${res[i].bank.toLocaleString('pt-BR')}`, true);
            } else {
              embed.addField(`${i + 1}. ${member.username}`, `**Moedas**: ${res[i].coins.toLocaleString('pt-BR')}\n**Banco**: ${res[i].bank.toLocaleString('pt-BR')}`, true);
            }
          }
        } else {
          for (i = 0; i < 15; i++) {
            let member = await client.users.fetch(res[i]._id) || "Usuário saiu do servidor"
            if (member === "Usuário saiu do servidor") {
              embed.addField(`${i + 1}. ???`, `**Moedas**: ${res[i].coins.toLocaleString('pt-BR')}\n**Banco**: ${res[i].bank.toLocaleString('pt-BR')}`, true);
            } else {
              embed.addField(`${i + 1}. ${member.username}`, `**Moedas**: ${res[i].coins.toLocaleString('pt-BR')}\n**Banco**: ${res[i].bank.toLocaleString('pt-BR')}`, true);
            }
          }
        }
    
        message.reply({embeds: [embed]});
    })    
  },
};
