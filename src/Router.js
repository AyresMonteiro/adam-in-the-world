const routes = require('./routes');

class Router {
  static route(message, command, args) {
    if (!/^[a-z]+\.[a-z]+$/.test(command)) return;

    const [type, route] = command.split('.');

    try {
      routes[type][route].handle(message, args);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Router;
