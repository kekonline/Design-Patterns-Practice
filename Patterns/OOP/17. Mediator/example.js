// Mediator
class Chatroom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.setChatroom(this);
    }

    send(message, from, to) {
        if (to) {
            // Direct message
            this.users[to].receive(message, from);
        } else {
            // Broadcast message
            Object.values(this.users).forEach(user => {
                if (user.name !== from) {
                    user.receive(message, from);
                }
            });
        }
    }
}

// Colleague
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    setChatroom(chatroom) {
        this.chatroom = chatroom;
    }

    send(message, to) {
        this.chatroom.send(message, this.name, to);
    }

    receive(message, from) {
        console.log(`${from} to ${this.name}: ${message}`);
    }
}

// Usage
const chatroom = new Chatroom();

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);

user1.send("Hello, Bob!", "Bob"); // Direct message
user2.send("Hey everyone!"); // Broadcast message
