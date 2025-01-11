const EventEmitter = require('events');

// The ChatRoom class extends EventEmitter, which provides the 'on' method
class ChatRoom extends EventEmitter {
    postMessage(user, message) {
        console.log(`${user} posted a message: ${message}`);

        // Emit 'newMessage' event to notify all subscribers
        this.emit('newMessage', { user, message });
    }
}

module.exports = ChatRoom;


const ChatRoom = require('./ChatRoom');

// Subscriber 1: Send push notification
const sendPushNotification = (message) => {
    console.log(`Sending push notification: New message from ${message.user}: "${message.message}"`);
};

// Subscriber 2: Send email notification
const sendEmailNotification = (message) => {
    console.log(`Sending email notification: New message from ${message.user}: "${message.message}"`);
};

// Subscriber 3: Log the message
const logMessage = (message) => {
    console.log(`Logging message from ${message.user}: "${message.message}"`);
};

// Create an instance of ChatRoom
const chatRoom = new ChatRoom();

// Subscribe to the 'newMessage' event using the on() method
chatRoom.on('newMessage', sendPushNotification);
chatRoom.on('newMessage', sendEmailNotification);
chatRoom.on('newMessage', logMessage);

// Simulate posting messages
chatRoom.postMessage('Alice', 'Hello everyone!');
chatRoom.postMessage('Bob', 'Hey Alice, how are you?');
