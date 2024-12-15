const shapePrototype = {
    draw() {
        console.log(`Drawing: Shapesize: ${this.shapeSize}, color: ${this.color}, borderWidth: ${this.borderWidth}.`);
    },

    clone() {
        return Object.create(this);
    },
}

const shape1 = shapePrototype.clone();
shape1.shapeSize = "large";
shape1.color = "red";
shape1.borderWidth = 2;

shape1.draw()