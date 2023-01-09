const discord = require("discord.js");

module.exports = {
  name: "pagar",
  aliases: ["pay"],
  description: "Talvez você está devendo umas notas ao seu amigo?",
  category: "Economia",
  run: async (client, message, args) => {
    const transferido = message.mentions.users.first();
    const dinheiro = args[1];

    const comousar = new discord.MessageEmbed()
      .setAuthor({
        name: "» Pagar Dinheiro",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Star_coin.png/242px-Star_coin.png",
      })
      .setDescription(`Irá dar dinheiro para a pessoa que desejar`)
      .addField(
        "Como usar",
        `\`r.pay <usuário> <quantia>\`\n\`pay @Kuriel#1411 1k\``
      )
      .setColor(client.cor)
      .setFooter({
        text: `${message.author.tag}`,
        iconURL: message.author.displayAvatarURL(),
      });

    if (!transferido || !dinheiro) {
      return message.reply({ embeds: [comousar] });
    }
    if (dinheiro.includes("-")) {
      let invalid = new discord.MessageEmbed()
        .setTitle(`» Operação Inválida.`)
        .setColor(client.cor);
      return message.reply({
        embeds: [invalid]
      });
    }
    function translateNum(dinheiro) {
      var nums = dinheiro.match(/[0-9]+[kmbt]/i);
      if (!nums) return parseInt(dinheiro);
      var check = nums[0].toLowerCase();
      var num = parseInt(check);
      if (check) {
        var letter = check.slice(check.length - 1);
        if (letter === "k") return num * 1000;
        if (letter === "m") return num * 1000000;
        if (letter === "b") return num * 1000000000;
        if (letter === "t") return num * 1000000000000;
        return 0;
      } else {
        return parseInt(dinheiro);
      }
    }
    let dinheiro2 = translateNum(dinheiro);
    if (isNaN(dinheiro2)) {
      let nan = new discord.MessageEmbed()
        .setTitle(`» Não é um número.`)
        .setColor(client.cor);
      return message.reply({ embeds: [nan] });
    }
    if (transferido.id === client.user.id) {
      let boteu = new discord.MessageEmbed()
        .setTitle(`» Que fofo, porém não quero dinheiro também.`)
        .setColor(client.cor);
      return message.reply({ embeds: [boteu] });
    }
    if (transferido.bot) {
      let bot = new discord.MessageEmbed()
        .setTitle(`» Bots não podem receber dinheiro.`)
        .setColor(client.cor);
      return message.reply({ embeds: [bot] });
    }
    if (transferido.id == message.author.id) {
      let eu = new discord.MessageEmbed()
        .setTitle(`» Você não pode se pagar.`)
        .setColor(client.cor);
      return message.reply({ embeds: [eu] });
    }
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        if (doc.coins < dinheiro2) {
          let nomoney = new discord.MessageEmbed()
            .setTitle(`» Sem Dinheiro.`)
            .setColor(client.cor);
          return message.reply({ embeds: [nomoney] });
        }
        doc.coins -= dinheiro2;
        doc.save();
        let conclusao = new discord.MessageEmbed()
          .setAuthor({
            name: `» ${message.author.tag} deu ${dinheiro2} para o ${transferido.tag}!`,
            iconURL: "https://i.imgur.com/PVt947i.png",
          })
          .setColor(client.cor);
        message.reply({ embeds: [conclusao] });
        if (!doc) {
          new client.db.Users({ _id: message.author.id }).save();
          let tryagain = new discord.MessageEmbed()
            .setTitle(`» Tente Novamente.`)
            .setColor(client.cor);
          return message.reply({ embeds: [tryagain] });
        }
        client.db.Users.findOne({ _id: transferido.id }, function (err, doc) {
          if (doc) {
            doc.coins += dinheiro2;
            doc.save();
          }
          if (!doc) {
            const docToSave = new client.db.Users({
              _id: transferido.id,
              coins: dinheiro2,
            });
            docToSave.save();
          }
        });
      }
    });
  },
};
