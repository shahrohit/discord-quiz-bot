import axios from "axios";

const handleLeaderboardCommand = async (interaction) => {
  const res = await axios.get(`http://localhost:3000/users`);
  const users = res.data;
  let leaderBoardUser = users.filter((user) => {
    return user.score;
  });

  leaderBoardUser.sort((user1, user2) => {
    return user2.score - user1.score;
  });

  await interaction.reply("Rank UserName Score");

  let badge = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  let rank = 1;
  for (const user of leaderBoardUser) {
    await interaction.channel.send(
      `${rank}. ${user.username}  ${user.score} ${
        badge[rank] ? badge[rank] : ""
      }`
    );
    rank++;
  }
};

export default handleLeaderboardCommand;
