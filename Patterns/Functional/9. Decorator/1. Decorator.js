// Base function
const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
};

// Decorator function
const withLogging = (fn) => {
    return async (...args) => {
        console.log(`Calling function: ${fn.name} with arguments:`, args);
        const startTime = Date.now();

        const result = await fn(...args);

        const endTime = Date.now();
        console.log(`Function ${fn.name} executed in ${endTime - startTime}ms`);

        return result;
    };
};

// Using the decorator
const fetchDataWithLogging = withLogging(fetchData);

// Calling the decorated function
(async () => {
    const data = await fetchDataWithLogging('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched Data:', data);
})();
