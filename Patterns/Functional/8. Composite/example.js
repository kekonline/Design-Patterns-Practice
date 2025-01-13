// Base Component (Leaf)
const createElement = (tag, content = "") => ({
    tag,
    content,
    render: () => `<${tag}>${content}</${tag}>`,
});

// Composite Component (Container)
const createContainer = (tag = "div") => {
    const children = [];

    return {
        tag,
        addChild: (child) => children.push(child),
        render: () => {
            const childHtml = children.map((child) => child.render()).join("\n");
            return `<${tag}>\n${childHtml}\n</${tag}>`;
        },
    };
};

// Usage
const header = createElement("h1", "Welcome to My Website");
const paragraph = createElement("p", "This is a paragraph of text.");

const button = createElement("button", "Click Me!");
const footer = createElement("footer", "Footer content here.");

const mainContainer = createContainer("main");
mainContainer.addChild(header);
mainContainer.addChild(paragraph);
mainContainer.addChild(button);

const rootContainer = createContainer("div");
rootContainer.addChild(mainContainer);
rootContainer.addChild(footer);

console.log(rootContainer.render());
