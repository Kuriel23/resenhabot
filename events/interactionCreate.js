const discord = require("discord.js");
let embedBefore; 
module.exports = async (client, interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "t") {
      require("../interactions/createTicket")(client, interaction);
    } else if (interaction.customId === "ft") {
      require("../interactions/closeTicket")(client, interaction);
    } else if (interaction.customId === "tf") {
      require("../interactions/deleteTicket")(client, interaction);
    } else if (interaction.customId === "ta") {
      require("../interactions/openTicket")(client, interaction);
    } else if (interaction.customId === "moderacao") {
      require("../interactions/helpmod")(client, interaction);
    } else if (interaction.customId === "diversao") {
      require("../interactions/helpfun")(client, interaction)
    } else if (interaction.customId === "diversos") {
      require("../interactions/helpdiversity")(client, interaction)
    } else if (interaction.customId === "economia") {
      require("../interactions/helpeconomy")(client, interaction)
    } else if (interaction.customId === "musica") {
      require("../interactions/helpmusic")(client, interaction)
    } else if (interaction.customId === "memes") {
      require("../interactions/memes")(client, interaction)
    }
  }
  if (interaction.isSelectMenu()) {
    if (interaction.customId === "jobs") {
      require("../interactions/chooseJob")(client, interaction);
    }

    if (interaction.customId === "deplev") {
      require("../interactions/deplev")(client, interaction);
    }

    if (interaction.customId === "deposit") {
      require("../interactions/deposit")(client, interaction);
    }

    if (interaction.customId === "draw") {
      require("../interactions/draw")(client, interaction);
    }

    if (interaction.customId === "shop") {
      require("../interactions/shop")(client, interaction);
    }

    if (interaction.customId === "buy") {
      require("../interactions/buy")(client, interaction);
    }

    if (interaction.customId === "sell") {
      require("../interactions/sell")(client, interaction);
    }
  }
};
