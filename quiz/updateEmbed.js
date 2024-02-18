const updateEmbed = (embed, question, isCorrect) => {
  return embed.setColor(isCorrect ? "Green" : "Red").addFields({
    name: `${
      isCorrect
        ? "Correct Answer ✅"
        : " Wrong Answer ❌\nCorrect Answer : " +
          question.options[question.answer]
    }`,
    value: " ",
  });
};

export default updateEmbed;
