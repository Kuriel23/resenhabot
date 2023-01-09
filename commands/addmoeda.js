const discord = require("discord.js");

module.exports = {
  name: "addmoeda",
  aliases: [],
  description: "Adicionar moedas sem precisar pagar nada.",
  category: "Economia",
  run: async (client, message, args) => {
    if (!message.member.permissions.has([discord.Permissions.FLAGS.BAN_MEMBERS])) return 0;
    const transferido = message.mentions.users.first();
    const dinheiro = args[1];

    const comousar = new discord.MessageEmbed()
      .setAuthor({
        name: "» Adicionar Dinheiro",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Star_coin.png/242px-Star_coin.png",
      })
      .setDescription(`Irá dar moedas para a pessoa que desejar`)
      .addField(
        "Como usar",
        `\`r.addmoeda <usuário> <quantia>\`\n\`addmoeda @Kuriel#1411 1k\``
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
        embeds: [invalid],
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
    if (transferido.bot) {
      let bot = new discord.MessageEmbed()
        .setTitle(`» Bots não podem receber dinheiro.`)
        .setColor(client.cor);
      return message.reply({ embeds: [bot] });
    }
    client.db.Users.findOne({ _id: transferido.id }, function (err, doc) {
      if (doc) {
        doc.coins += dinheiro2;
        doc.save();
        message.reply({ content: "Adicionado com sucesso!" });
      }
      if (!doc) {
        const docToSave = new client.db.Users({
          _id: transferido.id,
          coins: dinheiro2,
        });
        docToSave.save();
        message.reply({ content: "Adicionado com sucesso!" });
      }
    });
  },
};
