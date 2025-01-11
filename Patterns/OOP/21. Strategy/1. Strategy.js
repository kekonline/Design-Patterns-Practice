// Step 1: Define a strategy interface (optional in JS)
class ValidationStrategy {
    validate(data) {
        throw new Error("This method must be implemented!");
    }
}

// Step 2: Create concrete validation strategies
class LoginFormValidation extends ValidationStrategy {
    validate(data) {
        const errors = {};
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email format.";
        }
        if (!data.password || data.password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
        return errors;
    }
}

class RegistrationFormValidation extends ValidationStrategy {
    validate(data) {
        const errors = {};
        if (!data.username || data.username.length < 3) {
            errors.username = "Username must be at least 3 characters.";
        }
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email format.";
        }
        if (!data.password || data.password.length < 8) {
            errors.password = "Password must be at least 8 characters.";
        }
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        return errors;
    }
}

class ProfileUpdateValidation extends ValidationStrategy {
    validate(data) {
        const errors = {};
        if (data.phone && !/^\+?[1-9]\d{1,14}$/.test(data.phone)) {
            errors.phone = "Invalid phone number.";
        }
        if (data.bio && data.bio.length > 150) {
            errors.bio = "Bio cannot exceed 150 characters.";
        }
        return errors;
    }
}

// Step 3: Create a Context class
class FormValidator {
    setStrategy(validationStrategy) {
        this.validationStrategy = validationStrategy;
    }

    validate(data) {
        if (!this.validationStrategy) {
            throw new Error("Validation strategy not set!");
        }
        return this.validationStrategy.validate(data);
    }
}

// Step 4: Usage example
const validator = new FormValidator();

const loginFormData = { email: "user@example.com", password: "pass" };
validator.setStrategy(new LoginFormValidation());
console.log("Login Form Errors:", validator.validate(loginFormData)); // Password error

const registrationFormData = {
    username: "us",
    email: "invalid-email",
    password: "password",
    confirmPassword: "different-password",
};
validator.setStrategy(new RegistrationFormValidation());
console.log("Registration Form Errors:", validator.validate(registrationFormData)); // Multiple errors

const profileFormData = { phone: "12345", bio: "A very long bio that exceeds the maximum length of 150 characters..." };
validator.setStrategy(new ProfileUpdateValidation());
console.log("Profile Update Form Errors:", validator.validate(profileFormData)); // Phone and bio errors
