const { connect, Schema, model } = require("mongoose");
connect(
  "mongodb+srv://resenha:VgxJQgh2ls2gzVsv@resenhadb.gqrpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("[Database Iniciada] | Made by KurielDev"))
  .catch(() =>
    console.log("[ERRO] | Não foi possível se conectar ao banco de dados.")
  );

const UserSchema = new Schema({
  _id: { type: String, required: true },
  messages: { type: Number, default: 1 },
  movmessages: { type: Number, default: 1 },
  dailyCooldown: { type: Number, default: 0 },
  workCooldown: { type: Number, default: 0 },
  robCooldown: { type: Number, default: 0 },
  reviveCooldown: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  fishinv: {
    trash: { type: Number, default: 0 },
    salmon: { type: Number, default: 0 },
    clownfish: { type: Number, default: 0 },
    normalfish: { type: Number, default: 0 },
    pufferfish: { type: Number, default: 0 },
    electricfish: { type: Number, default: 0 },
    goldenfish: { type: Number, default: 0 },
    enchantedfish: { type: Number, default: 0 },
    goldenelectricfish: { type: Number, default: 0 },
    swordfish: { type: Number, default: 0 },
    celestialfish: { type: Number, default: 0 },
    goldensnakefish: { type: Number, default: 0 },
  },
  itemsinv: {
    fishrod: { type: Boolean, default: false },
    fishrodrare: { type: Boolean, default: false },
    fishrodenchanted: { type: Boolean, default: false },
    fishrodsupreme: { type: Boolean, default: false },
  },
  fishrodbreak: { type: Number, default: 0 },
  fishrodrarebreak: { type: Number, default: 0 },
  fishrodenchantedbreak: { type: Number, default: 0 },
  fishrodsupremebreak: { type: Number, default: 0 },
  job: { type: String, default: "Desempregado" },
});

const KeySchema = new Schema({
  _id: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
});

const TicketSchema = new Schema({
  _id: { type: String, required: true },
  userID: { type: String, required: true },
})

module.exports.Users = model("Users", UserSchema);
module.exports.Key = model("Key", KeySchema);
module.exports.Ticket = model("Ticket", TicketSchema);
