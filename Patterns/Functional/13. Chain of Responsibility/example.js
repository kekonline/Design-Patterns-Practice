// Validation Handlers

// Check if the field is not empty
const notEmpty = (next) => (value) => {
    if (value.trim() === '') {
        return 'Field cannot be empty';
    }
    return next(value); // Pass to the next handler
};

// Check if the value is a valid email
const isEmail = (next) => (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return 'Invalid email format';
    }
    return next(value); // Pass to the next handler
};

// Check if the value has a minimum length
const minLength = (min) => (next) => (value) => {
    if (value.length < min) {
        return `Minimum length is ${min}`;
    }
    return next(value); // Pass to the next handler
};

// Check if the value is alphanumeric
const isAlphanumeric = (next) => (value) => {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    if (!alphanumericRegex.test(value)) {
        return 'Only alphanumeric characters are allowed';
    }
    return next(value); // Pass to the next handler
};

// Create a chain of validators
const createValidatorChain = (...handlers) => {
    return handlers.reduceRight((next, handler) => handler(next), (value) => null);
};

// Example: Validating different form fields

// Email validation chain
const emailValidator = createValidatorChain(notEmpty, isEmail);

// Password validation chain (min length 6)
const passwordValidator = createValidatorChain(notEmpty, minLength(6));

// Username validation chain (alphanumeric, min length 4)
const usernameValidator = createValidatorChain(notEmpty, isAlphanumeric, minLength(4));

// Test cases

// Test email validation
const emailError = emailValidator('test@example'); // Invalid email format
console.log('Email validation error:', emailError); // 'Invalid email format'

// Test password validation
const passwordError = passwordValidator('1234');   // Minimum length is 6
console.log('Password validation error:', passwordError); // 'Minimum length is 6'

// Test username validation
const usernameError1 = usernameValidator('_user1');  // Only alphanumeric characters are allowed
const usernameError2 = usernameValidator('User123'); // null (no error)
console.log('Username validation error (case 1):', usernameError1); // 'Only alphanumeric characters are allowed'
console.log('Username validation error (case 2):', usernameError2); // null (no error)

// Valid inputs
console.log(emailValidator('valid@example.com')); // null (no error)
console.log(passwordValidator('securepassword')); // null (no error)
console.log(usernameValidator('User123')); // null (no error)
