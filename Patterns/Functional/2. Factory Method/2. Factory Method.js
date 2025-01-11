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
        ...base,// Base Component Class
        const Component = (type, id, className) => {
            return {
                type,
                id,
                className,
                render() {
                    throw new Error("This method must be implemented in subclass");
                }
            };
        };

        // Concrete Class: Button
        const Button = (id, className) => {
            const base = Component("Button", id, className);
            return {
                ...base,
                render() {
                    console.log(`<button id="${this.id}" class="${this.className}">Click me</button>`);
                }
            };
        };

        // Concrete Class: InputField
        const InputField = (id, className) => {
            const base = Component("InputField", id, className);
            return {
                ...base,
                render() {
                    console.log(`<input type="text" id="${this.id}" class="${this.className}" placeholder="Enter text" />`);
                }
            };
        };

        // Concrete Class: Dropdown
        const Dropdown = (id, className) => {
            const base = Component("Dropdown", id, className);
            return {
                ...base,
                render() {
                    console.log(`<select id="${this.id}" class="${this.className}"><option>Option 1</option><option>Option 2</option></select>`);
                }
            };
        };

        // Factory: ComponentFactory
        const ComponentFactory = (componentType, id, className) => {
            switch (componentType) {
                case 'button':
                    return Button(id, className);
                case 'input':
                    return InputField(id, className);
                case 'dropdown':
                    return Dropdown(id, className);
                default:
                    throw new Error('Component type not supported');
            }
        };

        // Client Code: Using the factory to create and render different components
        const buttonComponent = ComponentFactory('button', 'submit-btn', 'btn btn-primary');
        buttonComponent.render(); // <button id="submit-btn" class="btn btn-primary">Click me</button>

        const inputComponent = ComponentFactory('input', 'username-input', 'form-control');
        inputComponent.render(); // <input type="text" id="username-input" class="form-control" placeholder="Enter text" />

        const dropdownComponent = ComponentFactory('dropdown', 'country-dropdown', 'dropdown');
        dropdownComponent.render(); // <select id="country-dropdown" class="dropdown"><option>Option 1</option><option>Option 2</option></select>

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
