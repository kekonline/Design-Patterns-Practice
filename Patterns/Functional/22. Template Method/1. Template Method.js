// Template method: HTTP request lifecycle
function httpRequestLifecycle(setupRequest, sendRequest, handleResponse, handleError) {
    try {
        const request = setupRequest(); // Step 1: Setup
        const response = sendRequest(request); // Step 2: Send
        handleResponse(response); // Step 3: Handle response
    } catch (error) {
        handleError(error); // Step 4: Handle errors
    }
}

// Specific implementation: Fetch API example
httpRequestLifecycle(
    () => {
        // Setup request
        return {
            url: 'https://jsonplaceholder.typicode.com/posts',
            options: { method: 'GET' },
        };
    },
    (request) => {
        // Send request
        const { url, options } = request;
        return fetch(url, options).then((res) => res.json());
    },
    (response) => {
        // Handle response
        console.log('Response received:', response);
    },
    (error) => {
        // Handle error
        console.error('Error occurred:', error);
    }
);
