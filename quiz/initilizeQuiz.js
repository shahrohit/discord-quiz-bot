import startTheQuiz from "./startQuiz.js";

const initilizeQuiz = async (interaction) => {
  interaction.reply("Your Quiz wil start in 3 second...");
  setTimeout(() => {
    interaction.channel.send(`Your Quiz has started now, Best of Luck 🤞`);
    startTheQuiz(interaction);
  }, 3000);
};

export default initilizeQuiz;
