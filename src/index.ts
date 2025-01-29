import { Bot, InlineKeyboard } from "grammy";
import "dotenv/config";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.bot_token!); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
// bot.on("message", (ctx) => ctx.reply("Got another message!"));

const webappBtn = new InlineKeyboard().webApp(
    "Our web app",
    "https://vsn5nrl9-3000.euw.devtunnels.ms/"
);

bot.command("webapp", async (ctx) => {
    try {
        await ctx.reply("WEB APP", { reply_markup: webappBtn });
    } catch (error) {
        console.log(error);
    }
});

bot.command("showInGroup", async (ctx) => {
    try {
        await ctx.api.sendMessage(process.env.MC_ADMIN_CHAT_ID!, "Hey", {
            reply_markup: webappBtn,
        });
    } catch (error) {
        console.log(error);
    }
});

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
