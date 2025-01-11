// Mediator
class EventMediator {
    constructor() {
        this.services = {};
    }

    register(serviceName, serviceInstance) {
        this.services[serviceName] = serviceInstance;
        serviceInstance.setMediator(this);
    }

    notify(event, data) {
        Object.values(this.services).forEach(service => {
            service.handleEvent(event, data);
        });
    }
}

// Base Service (Abstract Class)
class BaseService {
    setMediator(mediator) {
        this.mediator = mediator;
    }

    handleEvent(event, data) {
        // To be implemented by derived classes
    }
}

// Specific Services
class EmailService extends BaseService {
    handleEvent(event, data) {
        if (event === "USER_REGISTERED") {
            console.log(`Sending Welcome Email to ${data.email}`);
        }
    }
}

class SMSService extends BaseService {
    handleEvent(event, data) {
        if (event === "USER_REGISTERED") {
            console.log(`Sending SMS to ${data.phone}`);
        }
    }
}

class LoggingService extends BaseService {
    handleEvent(event, data) {
        console.log(`Logging Event: ${event} for User: ${data.email}`);
    }
}

// Usage
const mediator = new EventMediator();

const emailService = new EmailService();
const smsService = new SMSService();
const loggingService = new LoggingService();

mediator.register("emailService", emailService);
mediator.register("smsService", smsService);
mediator.register("loggingService", loggingService);

// Simulate a user registration
const userData = { email: "user@example.com", phone: "+1234567890" };
mediator.notify("USER_REGISTERED", userData);
