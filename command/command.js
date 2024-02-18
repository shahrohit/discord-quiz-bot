import { BOT_TOKEN, CLIENT_ID } from "../config/envConfig.js";
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "create",
    description: "Create your Quiz Server",
  },
  {
    name: "start",
    description: "Give a Quiz",
  },
  {
    name: "leaderboard",
    description: "See your LeaderBoard",
  },
];

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
