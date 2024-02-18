import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GENERAL_CHANNEL_ID = process.env.GENERAL_CHANNEL_ID;
export { BOT_TOKEN, CLIENT_ID, GENERAL_CHANNEL_ID };
