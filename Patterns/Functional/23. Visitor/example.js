// Define the AST
const ast = {
    type: 'ElementNode',
    tag: 'div',
    children: [
        { type: 'TextNode', content: 'Hello, ' },
        { type: 'ElementNode', tag: 'span', children: [{ type: 'TextNode', content: 'world!' }] },
        { type: 'TextNode', content: ' Welcome to the Visitor Pattern.' }
    ]
};

// Visitor Function
const visitNode = (node, visitors) => {
    const visitor = visitors[node.type];
    if (!visitor) throw new Error(`No visitor defined for type: ${node.type}`);
    return visitor(node, visitors);
};

// Visitors
const visitors = {
    TextNode: (node) => node.content,
    ElementNode: (node, visitors) => {
        const childrenHTML = node.children
            .map((child) => visitNode(child, visitors))
            .join('');
        return `<${node.tag}>${childrenHTML}</${node.tag}>`;
    }
};

// Render HTML
const renderHTML = (ast) => visitNode(ast, visitors);

console.log(renderHTML(ast));
// Output: <div>Hello, <span>world!</span> Welcome to the Visitor Pattern.</div>

// Count Nodes using a different visitor
const countVisitors = {
    TextNode: () => ({ TextNode: 1, ElementNode: 0 }),
    ElementNode: (node, visitors) => {
        const counts = node.children.map((child) => visitNode(child, visitors));
        return counts.reduce(
            (acc, curr) => ({
                TextNode: acc.TextNode + curr.TextNode,
                ElementNode: acc.ElementNode + curr.ElementNode
            }),
            { TextNode: 0, ElementNode: 1 }
        );
    }
};

const countNodes = (ast) => visitNode(ast, countVisitors);

console.log(countNodes(ast));
// Output: { TextNode: 3, ElementNode: 2 }
