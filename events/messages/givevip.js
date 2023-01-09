module.exports = async (client, message) => {
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
        if (doc) {
          if (doc.messages >= 30) {
            doc.messages = 0;
            doc.save();
            var arrayShuffle = function (array) {
              for (
                var i = 0, length = array.length, swap = 0, temp = "";
                i < length;
                i++
              ) {
                swap = Math.floor(Math.random() * (i + 1));
                temp = array[swap];
                array[swap] = array[i];
                array[i] = temp;
              }
              return array;
            };
    
            var percentageChance = function (values, chances) {
              for (var i = 0, pool = []; i < chances.length; i++) {
                for (var i2 = 0; i2 < chances[i]; i2++) {
                  pool.push(i);
                }
              }
              return values[arrayShuffle(pool)["0"]];
            };
    
            var result = percentageChance(
              [
                "Vip Esmeralda",
                "Vip Obsidian",
                "Vip Netherite",
                "Vip Cosmun",
                "Vip Ametista",
                undefined,
              ],
              [10, 1, 1, 1, 1, 86]
            );
            if (result === undefined) return 0;
            let generatedcode = Math.random().toString().substr(2, 8);
            let msgforcode = `Você ganhou um ${result} no servidor de Resenha!\n\nPara resgatar o seu código use: r.redeem ${generatedcode}\n**O seu código expira em 24 horas.**`
            const row = new discord.MessageActionRow()
                .addComponents(
                    new discord.MessageButton()
                        .setCustomId('code'+message.author.id)
                        .setLabel('Receber Código')
                        .setStyle('SUCCESS'),
                );
    
                client.on('interactionCreate', async interaction => {
                    if (!interaction.isButton()) return;
                
                    if (interaction.customId === 'code'+message.author.id) {
                        if (interaction.user.id !== message.author.id) {
                        return await interaction.reply({ content: 'Você não pode clicar neste botão!', ephemeral: true })
                        }
                        await interaction.reply({ content: msgforcode, ephemeral: true });
                    }
                });
            message.author
              .send({
                content: msgforcode,
              })
              .catch((error) =>
                message.channel.send({
                  content: `${message.author}, parece que sua DM está fechada, e isso me impossibilitou de você receber o seu código na sua DM para um ${result}\n\nClique no botão abaixo para resgatar o seu código!`,
                  components: [row]
                })
              );
            client.channels.cache
              .get("964175520772284488")
              .send({
                content: `${message.author.username}#${message.author.discriminator} (${message.author.id}) ganhou um código para resgatar o ${result}. O código é: ${generatedcode}`,
              });
            const keygenerate = new client.db.Key({
              _id: generatedcode,
              date: Date.now(),
              type: result,
            });
            keygenerate.save();
          } else {
            doc.messages += 1;
            doc.save();
          }
        }
        if (!doc) {
          const docToSave = new client.db.Users({
            _id: message.author.id,
          });
          docToSave.save();
        }
      });
};
