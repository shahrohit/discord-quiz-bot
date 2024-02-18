import handleCreateCommand from "./createCommand.js";
import handleLeaderboardCommand from "./leaderboardCommand.js";
import handleStartCommand from "./startCommand.js";

export default async function handleInteractionCreate(interaction) {
  const cmd = interaction.commandName;

  if (cmd === "create") handleCreateCommand(interaction);
  else if (cmd === "start") handleStartCommand(interaction);
  else if (cmd === "leaderboard") handleLeaderboardCommand(interaction);
}
