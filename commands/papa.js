const Discord = require("discord.js");

module.exports = {
    name: "parceria",

    run: async (client, message, args, member) => {

        let embed = new Discord.MessageEmbed()
            .setTitle(`Olá! Por favor me envie o link do servidor.`)

        let embed1 = new Discord.MessageEmbed()
            .setTitle(`Qual o id do representante do servidor?`)

        message.reply({ embeds: [embed] }).then(msg => {
            let coletor_1 = message.channel.createMessageCollector({ filter: mm => mm.author.id == message.author.id, max: 1 });

            coletor_1.on("collect", (palavra_1) => {
                let linkdosv = palavra_1;
                if (!linkdosv) {
                    return palavra_1.reply(`Eu preciso de um link para enviar no canal de parcerias.`)
                } else
                    if (linkdosv) {
                        message.reply({ embeds: [embed1] }).then(m_2 => {

                            let coletor_2 = message.channel.createMessageCollector({ filter: mm => mm.author.id == message.author.id, max: 1 });

                            coletor_2.on("collect", (palavra_2) => {

                                let rep = palavra_2.content;

                                if (!rep) return palavra_2.reply(`Eu preciso de nomear um representante.`)

                                if (rep) {

                                    // let luvinhas = (member.id === `656450277720719383`)

                                    let embed_done = new Discord.MessageEmbed()
                                        .setTitle(`Muito obrigado por fechar parceria conosco ${rep.tag}!`)
                                        .setFooter(`Parceria fechada por: ${message.author.tag}`)

                                    message.channel.send(`${message.author} a parceria foi fechada com sucesso.`)
                                    client.users.fetch("656450277720719383", false).then((user) => {
                                        user.send(`${message.author.tag}, id: ${message.author.id} fechou uma parceria no Resenha com o usuário: ${rep.tag}, id: ${rep.id}`)
                                    })
                                    client.channels.cache
                                        .get("922455767146180641")
                                        .send({ content: linkdosv.replace(/(@here|@everyone)/g, "") + "\n\n||(este ping foi bloqueado)||" });
                                    client.channels.cache
                                        .get("922455767146180641")
                                        .send({ content: `@ping parcerias`, embeds: [embed_done] })

                                }

                            })
                        })

                    }
            })
        })
    }
}