import { EmbedBuilder } from "discord.js";

const createEmbed = (question) => {
  return new EmbedBuilder()
    .setTitle("Quiz Question")
    .setDescription(question.question)
    .addFields(
      { name: `😍 ${question.options[0]}`, value: " " },
      { name: `😎 ${question.options[1]}`, value: " " },
      { name: `🤑 ${question.options[2]}`, value: " " },
      { name: `🥰 ${question.options[3]}`, value: " " }
    )
    .setTimestamp();
};

export default createEmbed;
