import handleInteractionCreate from "./command/interactionCreate.js";
import getClient from "./config/clientConfig.js";
import { BOT_TOKEN } from "./config/envConfig.js";
import handleMessageCreate from "./message/messageCreate.js";

const client = getClient();

client.on("messageCreate", (message) => handleMessageCreate(message));

client.on("interactionCreate", (interaction) =>
  handleInteractionCreate(interaction)
);

client.login(BOT_TOKEN);
