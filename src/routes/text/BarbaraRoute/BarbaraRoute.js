const getTranslatedString = require("../../../strings/getTranslatedString");
const Route = require("../../Route");

class BarbaraRoute extends Route {
  static handle(message, args) {
    message.reply(getTranslatedString("adam.barbara") + args[1]);
  }
}

module.exports = BarbaraRoute;