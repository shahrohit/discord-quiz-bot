import { ChannelType, PermissionFlagsBits } from "discord.js";
import axios from "axios";

export default async function createPrivateChannel(interaction, channelName) {
  const existingChannel = interaction.guild.channels.cache.find(
    (channel) => channel.name === channelName
  );
  if (existingChannel) {
    interaction.reply("Your Quiz Channel is Already Created.");
    return;
  }

  try {
    const createdChannel = await interaction.guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
      permissionOverwrites: [
        {
          id: interaction.user.id, // Allow access to the user who created it
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
          ],
        },
        {
          id: interaction.guild.roles.everyone.id, // Deny access to everyone else
          deny: [PermissionFlagsBits.ViewChannel],
        },
      ],
    });

    await axios.post(`http://localhost:3000/users/`, {
      id: String(interaction.user.id),
      username: interaction.user.username,
      channelId: createdChannel.id,
      channelName: createdChannel.name,
    });

    interaction.reply(`Private channel created: ${createdChannel}`);
  } catch (error) {
    console.error("Error creating channel:", error.interaction);
    interaction.reply("Error creating private channel.");
  }
}
