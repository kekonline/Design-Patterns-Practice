class ValidationRequest {
    constructor(email, phone, age) {
        this.email = email;
        this.phone = phone;
        this.age = age;
    }
}

class ValidationHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return 'Validation passed'; // Default message if no handlers remain
    }
}

class EmailValidationHandler extends ValidationHandler {
    handle(request) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(request.email)) {
            return super.handle(request); // Pass to the next handler if email is valid
        } else {
            return 'Invalid email address';
        }
    }
}

class PhoneValidationHandler extends ValidationHandler {
    handle(request) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic phone number validation
        if (phoneRegex.test(request.phone)) {
            return super.handle(request); // Pass to the next handler if phone is valid
        } else {
            return 'Invalid phone number';
        }
    }
}

class AgeValidationHandler extends ValidationHandler {
    handle(request) {
        if (request.age >= 18) {
            return super.handle(request); // Pass to the next handler if age is valid
        } else {
            return 'Age must be 18 or older';
        }
    }
}

// Setup chain of handlers
const emailValidator = new EmailValidationHandler();
const phoneValidator = new PhoneValidationHandler();
const ageValidator = new AgeValidationHandler();

// Chain the validators
emailValidator.setNext(phoneValidator).setNext(ageValidator);

// Test the chain with different validation cases
const validRequest = new ValidationRequest('test@example.com', '+123456789', 25);
console.log(emailValidator.handle(validRequest)); // Validation passed

const invalidEmailRequest = new ValidationRequest('testexample.com', '+123456789', 25);
console.log(emailValidator.handle(invalidEmailRequest)); // Invalid email address

const invalidPhoneRequest = new ValidationRequest('test@example.com', '1234', 25);
console.log(emailValidator.handle(invalidPhoneRequest)); // Invalid phone number

const invalidAgeRequest = new ValidationRequest('test@example.com', '+123456789', 16);
console.log(emailValidator.handle(invalidAgeRequest)); // Age must be 18 or older
