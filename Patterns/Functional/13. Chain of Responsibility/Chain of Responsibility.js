// Validation strategies
const strategies = {
    isNotEmpty: (value) => value.trim() !== '' || 'Field cannot be empty',
    isEmail: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format',
    minLength: (min) => (value) =>
        value.length >= min || `Minimum length is ${min}`,
};

// Validator function using the Strategy Pattern
const validate = (value, ...rules) =>
    rules.map((rule) => rule(value)).filter((result) => result !== true);

// Example usage in a web form
const formData = {
    email: 'test@example',
    password: '1234',
};

const emailValidation = validate(
    formData.email,
    strategies.isNotEmpty,
    strategies.isEmail
);

const passwordValidation = validate(
    formData.password,
    strategies.isNotEmpty,
    strategies.minLength(6)
);

console.log('Email validation errors:', emailValidation); // ['Invalid email format']
console.log('Password validation errors:', passwordValidation); // ['Minimum length is 6']
