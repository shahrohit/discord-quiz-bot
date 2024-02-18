// import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js";
// import updateScore from "../utlis/updateScore.js";

// const quizComponent = async (interaction, startTime, questItr, scoreDetail) => {
//   let currTime = Date.now();
//   let quest = questItr.next();
//   if (currTime - startTime >= 120000 || quest.done) {
//     if (currTime - startTime >= 120000) {
//       await interaction.channel.send(`Time Up ⏱️`);
//     } else {
//       await interaction.channel.send(`You have attempted all the question. ✅`);
//     }
//     await interaction.channel.send("Updating your score...");
//     await updateScore(interaction, scoreDetail);
//     return;
//   }
//   const question = quest.value;

//   const embed = new EmbedBuilder()
//     .setTitle("Quiz Question")
//     .setDescription(question.question)
//     .addFields(
//       { name: `😍 ${question.options[0]}`, value: " " },
//       { name: `😎 ${question.options[1]}`, value: " " },
//       { name: `🤑 ${question.options[2]}`, value: " " },
//       { name: `🥰 ${question.options[3]}`, value: " " }
//     )
//     .setTimestamp();

//   const buttonOptions = {
//     choice1: {
//       label: "😍",
//       value: "0",
//       style: "Primary",
//     },
//     choice2: {
//       label: "😎",
//       value: "1",
//       style: "Secondary",
//     },
//     choice3: { label: "🤑", value: "2", style: "Danger" },
//     choice4: {
//       label: "🥰",
//       value: "3",
//       style: "Success",
//     },
//   };

//   // Create buttons with custom IDs and descriptive labels
//   const buttons = Object.values(buttonOptions).map((option) => {
//     return new ButtonBuilder()
//       .setLabel(option.label)
//       .setStyle(option.style)
//       .setCustomId(option.value);
//   });

//   // Create a single action row for better responsiveness
//   const row = new ActionRowBuilder().addComponents(buttons);

//   // Send the question embed with button row
//   await interaction.channel.send({ embeds: [embed], components: [row] });
//   let timeStamp = Date.now();
//   const filter = (i) =>
//     i.customId === "0" ||
//     i.customId === "1" ||
//     i.customId === "2" ||
//     i.customId === "3";

//   const collector = interaction.channel.createMessageComponentCollector({
//     filter,
//   });

//   collector.on("collect", async (interact) => {
//     collector.stop();
//     if (Date.now() - startTime >= 120000) {
//       await interact.update({
//         components: [],
//       });
//       await interaction.channel.send(`Time Up ⏱️`);
//       await interaction.channel.send("Updating your score...");
//       await updateScore(interaction, scoreDetail);
//       return;
//     }

//     let selectedOption = interact.customId;
//     const isCorrect = selectedOption === question.answer;

//     // Update embed based on the answer
//     const newEmbed = embed.setColor(isCorrect ? "Green" : "Red").addFields({
//       name: `${
//         isCorrect
//           ? "Correct Answer ✅"
//           : " Wrong Answer ❌\nCorrect Answer : " + question.answer
//       }`,
//       value: " ",
//     });
//     await interact.update({
//       embeds: [newEmbed],
//       components: [],
//     });
//     if (isCorrect) {
//       scoreDetail.score++;
//       scoreDetail.streak++;
//       if (scoreDetail.streak % 3 === 0) {
//         scoreDetail.score += 2;
//       }
//     } else {
//       scoreDetail.streak = 0;
//     }

//     await quizComponent(interaction, startTime, questItr, scoreDetail);
//   });
// };

// export default quizComponent;
