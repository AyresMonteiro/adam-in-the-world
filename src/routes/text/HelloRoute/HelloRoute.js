const getTranslatedString = require("../../../strings/getTranslatedString");
const Route = require("../../Route");

class HelloRoute extends Route {
  static handle(message, args) {
    message.reply(getTranslatedString("adam.hello"));
  }
}

module.exports = HelloRoute;