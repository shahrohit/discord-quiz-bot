import axios from "axios";

const updateScore = async (interaction, scoreDetail) => {
  const score = scoreDetail.score;
  let userId = interaction.user.id;
  await axios.patch(`http://localhost:3000/users/${userId}`, { score: score });

  await interaction.channel.send(`Your Score is ${scoreDetail.score}`);
};

export default updateScore;
