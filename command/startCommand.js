import { GENERAL_CHANNEL_ID } from "../config/envConfig.js";
import initilizeQuiz from "../quiz/initilizeQuiz.js";

const handleStartCommand = (interaction) => {
  if (interaction.channel.id === GENERAL_CHANNEL_ID) {
    interaction.reply(`Go to your private Quiz channel.`);
  } else {
    initilizeQuiz(interaction);
  }
};

export default handleStartCommand;
