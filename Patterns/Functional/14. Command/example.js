// Commands
const addNotification = (notifications, message) => {
    const notification = { id: Date.now(), message, read: false };
    notifications.push(notification);
    console.log(`Notification added: "${message}"`);
};

const removeNotification = (notifications, id) => {
    const index = notifications.findIndex((notif) => notif.id === id);
    if (index !== -1) {
        notifications.splice(index, 1);
        console.log(`Notification with ID ${id} removed`);
    } else {
        console.log(`Notification with ID ${id} not found`);
    }
};

const markAsRead = (notifications, id) => {
    const notification = notifications.find((notif) => notif.id === id);
    if (notification) {
        notification.read = true;
        console.log(`Notification with ID ${id} marked as read`);
    } else {
        console.log(`Notification with ID ${id} not found`);
    }
};

// Command Invoker
const notificationInvoker = () => {
    const commandHistory = [];
    const notifications = [];

    return {
        execute: (command, ...args) => {
            command(notifications, ...args);
            commandHistory.push({ command, args });
        },
        undo: () => {
            if (commandHistory.length === 0) {
                console.log("Nothing to undo");
                return;
            }
            commandHistory.pop(); // Remove last command
            notifications.length = 0; // Reset notifications
            commandHistory.forEach(({ command, args }) =>
                command(notifications, ...args)
            );
            console.log("Undo performed");
        },
        showNotifications: () => console.log("Notifications:", notifications),
    };
};

// Using the Notification Invoker
const invoker = notificationInvoker();

invoker.execute(addNotification, "Welcome to the app!");
invoker.execute(addNotification, "Your profile has been updated");
invoker.execute(markAsRead, 1); // This will fail because of a non-existent ID
invoker.showNotifications();

const firstNotifId = Date.now(); // Simulating adding notifications
invoker.execute(addNotification, "System maintenance scheduled");
invoker.execute(removeNotification, firstNotifId); // Example removal
invoker.showNotifications();

invoker.undo(); // Undo the last command
invoker.showNotifications();
