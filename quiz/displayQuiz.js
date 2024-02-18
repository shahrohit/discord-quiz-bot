import updateScore from "../utils/updateScore.js";
import createEmbed from "./createEmbed.js";
import createOptionButtons from "./createOptionButtons.js";
import updateEmbed from "./updateEmbed.js";

const displayQuiz = async (
  interaction,
  startTime,
  quizQuestionItr,
  userScoreDetail
) => {
  let currTime = Date.now();
  let { value: question, done } = quizQuestionItr.next();

  if (currTime - startTime >= 120000 || done) {
    if (currTime - startTime >= 120000) {
      await interaction.channel.send(`Time Up ⏱️`);
    } else {
      await interaction.channel.send(`You have attempted all the question. ✅`);
    }
    await interaction.channel.send("Updating your score...");
    await updateScore(interaction, userScoreDetail);
    return;
  }

  const embed = createEmbed(question);
  const btnOption = createOptionButtons();

  // Send the question embed with button
  await interaction.channel.send({ embeds: [embed], components: [btnOption] });

  const filter = (i) =>
    i.customId === "0" ||
    i.customId === "1" ||
    i.customId === "2" ||
    i.customId === "3";

  const collector = interaction.channel.createMessageComponentCollector({
    filter,
  });

  collector.on("collect", async (interact) => {
    collector.stop();
    if (Date.now() - startTime >= 120000) {
      await interact.update({
        components: [],
      });
      await interaction.channel.send(`Time Up ⏱️`);
      await interaction.channel.send("Updating your score...");
      await updateScore(interaction, userScoreDetail);
      return;
    }

    let selectedOption = interact.customId;
    const isCorrect = selectedOption === question.answer;

    // Update embed based on the answer
    const newEmbed = updateEmbed(embed, question, isCorrect);
    await interact.update({
      embeds: [newEmbed],
      components: [],
    });

    if (isCorrect) {
      userScoreDetail.score++;
      userScoreDetail.streak++;
      if (userScoreDetail.streak % 3 === 0) {
        userScoreDetail.score += 2;
      }
    } else {
      userScoreDetail.streak = 0;
    }

    await displayQuiz(interaction, startTime, quizQuestionItr, userScoreDetail);
  });
};

export default displayQuiz;
