import { GENERAL_CHANNEL_ID } from "../config/envConfig.js";

export default async function handleMessageCreate(message) {
  if (message.author.bot) return;

  if (message.channel.id === GENERAL_CHANNEL_ID) {
    let msg = message.content.trim().toLowerCase();
    if (msg === "hii" || msg === "hello") {
      message.reply({
        content: `Hello ${message.author.username}, I am Quiz bot 🤖`,
      });
    }
    return;
  }
}
