// Infinite Scrolling Iterator
function* productBatchIterator(products, batchSize) {
    let index = 0;
    while (index < products.length) {
        yield products.slice(index, index + batchSize);
        index += batchSize;
    }
}

// Example Usage
const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
];

const batchSize = 3; // Load 3 products at a time
const productIterator = productBatchIterator(products, batchSize);

function loadNextBatch() {
    const { value, done } = productIterator.next();
    if (done) {
        console.log("No more products to load.");
        return;
    }
    console.log("Loaded Products:", value);
}

// Simulating User Interaction
loadNextBatch(); // Loaded Products: [ 'Product 1', 'Product 2', 'Product 3' ]
loadNextBatch(); // Loaded Products: [ 'Product 4', 'Product 5', 'Product 6' ]
loadNextBatch(); // Loaded Products: [ 'Product 7', 'Product 8' ]
loadNextBatch(); // No more products to load.
