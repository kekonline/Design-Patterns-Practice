class ConfigurationManager {
  static instance = null;

  constructor(configObject) {
    // If an instance already exists, return it.
    if (ConfigurationManager.instance) {
      return ConfigurationManager.instance;
    }

    // If no config is provided, throw an error or use a default config
    if (!configObject) {
      throw new Error('Configuration must be provided');
    }

    this.config = configObject;
    ConfigurationManager.instance = this;  // Store the first instance
  }

  getConfig() {
    return this.config;
  }
}

// Simulate a config object
const config1 = { database: 'mongodb', host: 'localhost' };

// Create a ConfigurationManager instance
const configManager1 = new ConfigurationManager(config1);
console.log(configManager1.getConfig());  // { database: 'mongodb', host: 'localhost' }

// Attempt to create another instance with a different config
const config2 = { database: 'mysql', host: 'remotehost' };
const configManager2 = new ConfigurationManager(config2);

// Should still return the same config from configManager1, since only one instance exists
console.log(configManager2 === configManager1); // true
console.log(configManager2.getConfig());  // { database: 'mongodb', host: 'localhost' }
