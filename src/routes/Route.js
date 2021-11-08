const getTranslatedString = require("../strings/getTranslatedString");

class Route {
  static handle(message, args) {
    console.error(getTranslatedString('messages.not_implemented'));
  }
}

module.exports = Route;
