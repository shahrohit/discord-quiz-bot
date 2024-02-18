# Discord Quiz Bot

This bot allows users to play interactive quizzes within your Discord server. Quiz contains the multiple choice questions. This bot is made using Node Runtime.

# Feature

1. User can create a private channel using `/create` command.
2. Start the quiz in the private channel using `/start` command.
3. It contains 10 questions of javascript. In every quiz questions will be `shuffled`.
4. Questions are fetched from the db.json using `json-server`
5. Quiz will be display in an interactive way.
6. User can click on the buttons to select the option.
7. provide immediate feedback with correct/incorrect answer.
8. Leadboard is also available using `/leaderboard` command.
9. `Extra 2 points` for the continuous 3 correct answer.

# library Used

1. discord.js : This library helps to build the discord bot.
2. json-server : It simulates a RESTful API using a JSON file `(db.json)` as the data source.
3. axios : For requesting the json-serve to get user data and questions.
4. dotenv : for the environment variable.
