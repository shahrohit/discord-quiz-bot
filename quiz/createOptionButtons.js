import { ActionRowBuilder, ButtonBuilder } from "discord.js";

const createOptionButtons = () => {
  const buttonOptions = {
    choice1: {
      label: "😍",
      value: "0",
      style: "Primary",
    },
    choice2: {
      label: "😎",
      value: "1",
      style: "Secondary",
    },
    choice3: { label: "🤑", value: "2", style: "Danger" },
    choice4: {
      label: "🥰",
      value: "3",
      style: "Success",
    },
  };

  // Create buttons with custom IDs and descriptive labels
  const buttons = Object.values(buttonOptions).map((option) => {
    return new ButtonBuilder()
      .setLabel(option.label)
      .setStyle(option.style)
      .setCustomId(option.value);
  });

  // Create a single action row for better responsiveness
  return new ActionRowBuilder().addComponents(buttons);
};

export default createOptionButtons;
