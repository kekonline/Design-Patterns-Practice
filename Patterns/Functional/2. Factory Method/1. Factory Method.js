// Base Class: Notification
const Notification = (message) => {
    return {
        message,
        send() {
            throw new Error("This method must be implemented in subclass");
        }
    };
};

// Concrete Class: EmailNotification
const EmailNotification = (message) => {
    const base = Notification(message);
    return {
        ...base,
        send() {
            console.log(`Sending Email: ${this.message}`);
        }
    };
};

// Concrete Class: SMSNotification
const SMSNotification = (message) => {
    const base = Notification(message);
    return {
        ...base,
        send() {
            console.log(`Sending SMS: ${this.message}`);
        }
    };
};

// Concrete Class: PushNotification
const PushNotification = (message) => {
    const base = Notification(message);
    return {
        ...base,
        send() {
            console.log(`Sending Push Notification: ${this.message}`);
        }
    };
};

// Factory: NotificationFactory
const NotificationFactory = (type, message) => {
    switch (type) {
        case 'email':
            return EmailNotification(message);
        case 'sms':
            return SMSNotification(message);
        case 'push':
            return PushNotification(message);
        default:
            throw new Error('Unsupported notification type');
    }
};

// Client Code: Using the factory to create the appropriate notification
const emailNotification = NotificationFactory('email', 'You have a new message!');
emailNotification.send(); // Sending Email: You have a new message!

const smsNotification = NotificationFactory('sms', 'Your order has shipped!');
smsNotification.send(); // Sending SMS: Your order has shipped!

const pushNotification = NotificationFactory('push', 'You have a new friend request!');
pushNotification.send(); // Sending Push Notification: You have a new friend request!
