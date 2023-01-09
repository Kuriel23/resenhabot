const fetch = require("node-fetch");
const translate = require("@vitalets/google-translate-api");

module.exports = async (client, message) => {
  if (message.author.bot) return;
  await translate(message.content, { to: "en" }).then(async (tapi) => {
    const res = await fetch(
      `https://api.udit.tk/api/chatbot?message=${encodeURIComponent(
        tapi.text
      )}&gender=male&name=Resenha`
    ).catch((e) => {
      0;
    });
    const response = await res.json().catch((e) => {
      0;
    });
    await translate(response.message, { to: "pt" }).then((rev) => {
      message.channel.send({ content: rev.text });
    });
  });
};
