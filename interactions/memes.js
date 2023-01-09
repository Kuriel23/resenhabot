const discord = require("discord.js");
let embedBefore;

module.exports = async (client, interaction) => {
  await embedBefore?.delete().catch(console.error);
  var list = [
    "https://cdn.discordapp.com/attachments/890288893432307802/982987083264163870/fabd44ccd3e6a13ab45102f2af32f22b.mp4",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987083671035954/5ff23cf7fb96740f1d49d069119bb622.jpg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987084010754149/memes__viral__talentosnaptube__tente_n_rir_aleatorio--720p.mp4",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987084346302495/460f8d154d68fda81e9b3676671a9c65.jpg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987137412661328/Screenshot_20220419-103949-1.jpg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987137622355978/IMG-20220406-WA0020-1.jpg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987137983057940/download_2.jpeg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987138180206673/Screenshot_20220507-182826.png",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987138436067419/Screenshot_20220501-081247-605.png",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987292513804338/Screenshot_20220224-115142_Instagram.jpg",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987293092642936/olha_a_situacao_do_menino_KKKKKKK__shorts720P_HD.MP4.mov",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987294095069234/redditsave.com_basedrooms-3p22x1oi5dn81-480.mp4",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987295533711360/a9370b39048e10f98f35a7aca5623583-1.mp4",
    "https://cdn.discordapp.com/attachments/890288893432307802/982987296422920242/buxexa-20220222-0001.mp4",
  ];

  var rand = list[Math.floor(Math.random() * list.length)];

  embedBefore = await interaction.channel.send({ content: rand});
  interaction.deferUpdate();
};
