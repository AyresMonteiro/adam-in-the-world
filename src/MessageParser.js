class MessageParser {
  static parse(message) {
    return message.content.split(' ');
  }
}

module.exports = MessageParser;