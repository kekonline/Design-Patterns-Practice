class HttpRequest {
    constructor(method, url, body = null) {
        this.method = method;
        this.url = url;
        this.body = body;
    }
}

class RequestHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler; // Allows chaining
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return 'Request not handled';
    }
}

class GetRequestHandler extends RequestHandler {
    handle(request) {
        if (request.method === 'GET') {
            return `Handling GET request for ${request.url}`;
        } else {
            return super.handle(request); // Pass the request to the next handler
        }
    }
}

class PostRequestHandler extends RequestHandler {
    handle(request) {
        if (request.method === 'POST') {
            return `Handling POST request for ${request.url} with body: ${JSON.stringify(request.body)}`;
        } else {
            return super.handle(request); // Pass the request to the next handler
        }
    }
}

class DeleteRequestHandler extends RequestHandler {
    handle(request) {
        if (request.method === 'DELETE') {
            return `Handling DELETE request for ${request.url}`;
        } else {
            return super.handle(request); // Pass the request to the next handler
        }
    }
}

// Setup chain of handlers
const getHandler = new GetRequestHandler();
const postHandler = new PostRequestHandler();
const deleteHandler = new DeleteRequestHandler();

// Chain the handlers
getHandler.setNext(postHandler).setNext(deleteHandler);

// Test the chain with different types of HTTP requests
const getRequest = new HttpRequest('GET', '/home');
console.log(getHandler.handle(getRequest)); // Handling GET request for /home

const postRequest = new HttpRequest('POST', '/submit', { name: 'John Doe', age: 30 });
console.log(getHandler.handle(postRequest)); // Handling POST request for /submit with body: {"name":"John Doe","age":30}

const deleteRequest = new HttpRequest('DELETE', '/delete-item/123');
console.log(getHandler.handle(deleteRequest)); // Handling DELETE request for /delete-item/123

const putRequest = new HttpRequest('PUT', '/update-item/123', { name: 'New Item' });
console.log(getHandler.handle(putRequest)); // Request not handled
