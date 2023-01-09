const schedule = require("node-schedule");
const superagent = require("superagent");

module.exports = async (client) => {
  client.user.setActivity(`${client.users.cache.size} membros`, {
    type: "PLAYING",
  });
  let activities = [
      `💎 Utilize r.help`,
      `💻 Exclusivo do Resenha`,
      `${client.users.cache.size} membros`,
    ],
    i = 0;
  setInterval(() => {
    client.user.setActivity(activities[i++ % activities.length], {
      type: "PLAYING",
    });
  }, 60000);
  schedule.scheduleJob("0 7 * * *", async function () {
    const { body } = await superagent
      .get("https://positive-vibes-api.herokuapp.com/quotes/random")
      client.channels.cache.get("888451873986732082").send(body.data);
  });
};
