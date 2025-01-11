// Abstract Expression
class Expression {
    interpret() {
        throw "This method must be overridden!";
    }
}

// Terminal Expressions (Concrete expressions)
class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}

class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

class SubtractExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}

// Client Code
function evaluateExpression(expression) {
    return expression.interpret();
}

// Usage:
const expression = new AddExpression(
    new NumberExpression(5),
    new SubtractExpression(new NumberExpression(10), new NumberExpression(3))
);

console.log("Result: ", evaluateExpression(expression)); // 12
