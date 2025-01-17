// Subject (Chat Room)
function createChatRoom() {
    let users = []; // List of subscribed user callbacks

    return {
        // Subscribe a user to the chat room
        subscribe(user) {
            users.push(user);
        },
        // Unsubscribe a user from the chat room
        unsubscribe(user) {
            users = users.filter((u) => u !== user);
        },
        // Broadcast a message to all subscribed users
        notify(message) {
            users.forEach((user) => user(message));
        },
    };
}

// Example Observers (Users)
const user1 = (message) => console.log(`User 1 received: "${message}"`);
const user2 = (message) => console.log(`User 2 received: "${message}"`);
const user3 = (message) => console.log(`User 3 received: "${message}"`);

// Usage
const chatRoom = createChatRoom();

// Subscribing users to the chat room
chatRoom.subscribe(user1);
chatRoom.subscribe(user2);
chatRoom.subscribe(user3);

// Broadcasting messages
chatRoom.notify("Hello, everyone! Welcome to the chat room.");
chatRoom.notify("Today's topic is functional programming.");

// Unsubscribing a user
chatRoom.unsubscribe(user2);

// Broadcasting another message
chatRoom.notify("User 2 has left the chat. Continue the discussion!");
