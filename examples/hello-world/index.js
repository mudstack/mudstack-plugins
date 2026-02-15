const { MudstackPlugin } = require("@mudstack/plugins");

class HelloWorldPlugin extends MudstackPlugin {
  async activate() {
    await super.activate();
    this.api.log("info", "[HelloWorld] Plugin activated");
  }

  async deactivate() {
    this.api.log("info", "[HelloWorld] Plugin deactivating");
    await super.deactivate();
  }
}

module.exports = HelloWorldPlugin;
