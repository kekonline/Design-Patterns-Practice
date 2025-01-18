// Sorting strategies
const sortByPriceAsc = (products) => [...products].sort((a, b) => a.price - b.price);
const sortByPriceDesc = (products) => [...products].sort((a, b) => b.price - a.price);
const sortByName = (products) => [...products].sort((a, b) => a.name.localeCompare(b.name));
const sortByRating = (products) => [...products].sort((a, b) => b.rating - a.rating);

// Context: Sorting function
function sortProducts(products, strategy) {
    return strategy(products);
}

// Example usage
const products = [
    { name: "Laptop", price: 1200, rating: 4.7 },
    { name: "Phone", price: 800, rating: 4.9 },
    { name: "Tablet", price: 600, rating: 4.5 },
    { name: "Monitor", price: 300, rating: 4.2 },
];

// Applying different sorting strategies
console.log("Sorted by Price (Asc):", sortProducts(products, sortByPriceAsc));
console.log("Sorted by Price (Desc):", sortProducts(products, sortByPriceDesc));
console.log("Sorted by Name:", sortProducts(products, sortByName));
console.log("Sorted by Rating:", sortProducts(products, sortByRating));
