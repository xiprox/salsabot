var config = require("./config");
var botkit = require('botkit');

var controller = botkit.slackbot();
var bot = controller.spawn({
    token: config.token
});

bot.startRTM(function (err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }

    bot.api.users.setPresence({
        "token": config.token,
        "presence": "away"
    }, function (err, response) {
        /* Try to hide yourself. And well, forget it if you can't. */
    });
});

controller.hears("sauce", 'direct_message,direct_mention,mention,ambient', function (bot, message) {
    bot.reply(message, "SAUCE!");
});