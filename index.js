const { MudstackPlugin } = require('@mudstack/plugins');

class MyPlugin extends MudstackPlugin {
  async activate() {
    await super.activate();
    this.api.log('info', 'MyPlugin activated');
  }

  async deactivate() {
    this.api.log('info', 'MyPlugin deactivating');
    await super.deactivate();
  }
}

module.exports = MyPlugin;
