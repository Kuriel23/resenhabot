module.exports = async (client, message) => {
  client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
    if (doc) {
      if (doc.movmessages >= 50) {
        doc.movmessages = 0;
        doc.save();
        client.channels.cache.get("964175520772284488").send({
          content: `${message.author}, você acaba de ganhar mais 1 ponto!`,
        });
      } else {
        doc.movmessages += 1;
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
