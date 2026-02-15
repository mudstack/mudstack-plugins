const { MudstackPlugin } = require('@mudstack/plugins');

class ContextMenuExamplePlugin extends MudstackPlugin {
  async activate() {
    await super.activate();
    this.api.log('info', '[ContextMenuExample] Plugin activated');
  }

  async deactivate() {
    this.api.log('info', '[ContextMenuExample] Plugin deactivating');
    await super.deactivate();
  }

  /**
   * Called when the user runs the "Say Hello (example)" context menu command.
   * Subscribed via manifest subscriptions (event + handler); no manual events.on() needed.
   */
  async handleSayHello(message) {
    const { id: requestId, payload } = message || {};
    this.api.log('info', '[ContextMenuExample] User ran the context menu command', payload);
  }
}

module.exports = ContextMenuExamplePlugin;
