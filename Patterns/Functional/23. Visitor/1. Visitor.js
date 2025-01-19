// Define the tree structure
const catalog = {
    type: 'Category',
    name: 'Electronics',
    children: [
        { type: 'Product', name: 'Laptop', price: 1000 },
        { type: 'Product', name: 'Smartphone', price: 800 },
        {
            type: 'Category',
            name: 'Accessories',
            children: [
                { type: 'Product', name: 'Headphones', price: 100 },
                { type: 'Product', name: 'Charger', price: 50 }
            ]
        }
    ]
};

// Define the Visitor higher-order function
const visitNode = (node, visitors) => {
    const visitor = visitors[node.type];
    if (!visitor) throw new Error(`No visitor defined for type: ${node.type}`);
    return visitor(node, visitors);
};

// Implement Visitors
const visitors = {
    Product: (node) => node.price, // Return the price of the product
    Category: (node, visitors) =>
        node.children.reduce((total, child) => total + visitNode(child, visitors), 0)
};

// Calculate total price using the Visitor Pattern
const totalPrice = visitNode(catalog, visitors);

console.log(`Total Price: ${totalPrice}`); // Output: Total Price: 1950
