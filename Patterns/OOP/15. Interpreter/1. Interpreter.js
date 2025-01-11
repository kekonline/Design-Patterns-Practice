// Abstract Expression
class PermissionExpression {
  interpret(user) {
    throw "This method must be overridden!";
  }
}

// Terminal Expressions (Concrete expressions)
class VariableExpression extends PermissionExpression {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpret(user) {
    return user[this.variable];
  }
}

class EqualsExpression extends PermissionExpression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(user) {
    return this.left.interpret(user) === this.right;
  }
}

class GreaterThanExpression extends PermissionExpression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(user) {
    return this.left.interpret(user) > this.right;
  }
}

class AndExpression extends PermissionExpression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(user) {
    return this.left.interpret(user) && this.right.interpret(user);
  }
}

class OrExpression extends PermissionExpression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(user) {
    return this.left.interpret(user) || this.right.interpret(user);
  }
}

class NotExpression extends PermissionExpression {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  interpret(user) {
    return !this.expression.interpret(user);
  }
}

// Client Code
function evaluatePermission(rule, user) {
  return rule.interpret(user);
}

// Usage
const user = {
  role: 'admin',
  age: 25,
  country: 'US'
};

const permissionRule = new AndExpression(
  new EqualsExpression(new VariableExpression('role'), 'admin'),
  new GreaterThanExpression(new VariableExpression('age'), 18)
);

console.log(evaluatePermission(permissionRule, user)); // true

const complexRule = new OrExpression(
  new EqualsExpression(new VariableExpression('role'), 'user'),
  new AndExpression(
    new GreaterThanExpression(new VariableExpression('age'), 18),
    new EqualsExpression(new VariableExpression('country'), 'US')
  )
);

console.log(evaluatePermission(complexRule, user)); // true

const negativeRule = new NotExpression(
  new EqualsExpression(new VariableExpression('role'), 'guest')
);

console.log(evaluatePermission(negativeRule, user)); // true
