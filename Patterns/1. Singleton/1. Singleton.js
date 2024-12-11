class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.messages = [];
    Logger.instance = this;
  }

  storeMessage(newMessage) {
    this.messages.push(newMessage);
  }

  displayAllMessages() {
    if (this.messages.length === 0) {
      console.log("No messages to display");
    } else {
      this.messages.forEach(eachMessage => {
        console.log(eachMessage);
      });
    }
  }

  clearMessages() {
    this.messages = [];
  }
}
