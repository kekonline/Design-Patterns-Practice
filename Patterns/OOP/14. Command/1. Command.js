// Command Interface
class Command {
    execute() { }
}

// Receiver: Form with its actions
class Form {
    constructor() {
        this.isValid = true;
        this.formData = {};
    }

    validate() {
        this.isValid = true; // Basic validation logic
        console.log("Form validated!");
    }

    submit() {
        if (this.isValid) {
            console.log("Form submitted successfully!");
        } else {
            console.log("Form is invalid. Cannot submit.");
        }
    }

    reset() {
        this.formData = {};
        this.isValid = true;
        console.log("Form reset to initial state.");
    }
}

// Concrete Command for form validation
class ValidateFormCommand extends Command {
    constructor(form) {
        super();
        this.form = form;
    }

    execute() {
        this.form.validate();
    }
}

// Concrete Command for form submission
class SubmitFormCommand extends Command {
    constructor(form) {
        super();
        this.form = form;
    }

    execute() {
        this.form.submit();
    }
}

// Concrete Command for form reset
class ResetFormCommand extends Command {
    constructor(form) {
        super();
        this.form = form;
    }

    execute() {
        this.form.reset();
    }
}

// Invoker: Form Controller (the object that triggers commands)
class FormController {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    executeCommand() {
        this.command.execute();
    }
}

// Client: Setting up the form and commands
const form = new Form();
const validateCommand = new ValidateFormCommand(form);
const submitCommand = new SubmitFormCommand(form);
const resetCommand = new ResetFormCommand(form);

const controller = new FormController();

// Simulating form interactions
controller.setCommand(validateCommand);
controller.executeCommand();  // Form validated!

controller.setCommand(submitCommand);
controller.executeCommand();  // Form submitted successfully!

controller.setCommand(resetCommand);
controller.executeCommand();  // Form reset to initial state.
