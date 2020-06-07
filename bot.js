const { Telegraf } = require('telegraf')

bot_token = "947012450:AAFfnF7854-9ECmH_wcyDea48qojOslM9nA"
const bot = new Telegraf(bot_token)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()