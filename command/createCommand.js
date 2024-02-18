import createPrivateChannel from "../channel/createPrivateChannel.js";
import { GENERAL_CHANNEL_ID } from "../config/envConfig.js";
import getUser from "../utils/User.js";

const handleCreateCommand = async (interaction) => {
  let user = await getUser(interaction.user.id);

  if (user) {
    interaction.reply(`You quiz channel is already created`);
    return;
  }

  if (interaction.channel.id === GENERAL_CHANNEL_ID) {
    const channelName = `quiz-${interaction.user.username}`;
    await createPrivateChannel(interaction, channelName);
  }
};

export default handleCreateCommand;
