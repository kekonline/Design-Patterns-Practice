// Base handler for HTTP requests
class RequestHandler {
    handle(request) {
        return `Handling request for ${request.url}`;
    }
}

// Decorator for logging
class LoggerMiddleware {
    constructor(handler) {
        this.handler = handler;
    }

    handle(request) {
        console.log(`[LOG] Request received at: ${request.url}`);
        return this.handler.handle(request);
    }
}

// Decorator for authentication
class AuthMiddleware {
    constructor(handler) {
        this.handler = handler;
    }

    handle(request) {
        if (!request.headers.authorization) {
            return "403 Forbidden: No authorization token provided";
        }
        console.log("[AUTH] Request authorized");
        return this.handler.handle(request);
    }
}

// Decorator for parsing JSON
class JsonParserMiddleware {
    constructor(handler) {
        this.handler = handler;
    }

    handle(request) {
        if (request.headers["content-type"] === "application/json") {
            try {
                request.body = JSON.parse(request.body);
                console.log("[PARSER] JSON parsed successfully");
            } catch (error) {
                return "400 Bad Request: Invalid JSON format";
            }
        }
        return this.handler.handle(request);
    }
}

// Usage
const request = {
    url: "/api/data",
    headers: {
        "content-type": "application/json",
        authorization: "Bearer token123",
    },
    body: '{"key":"value"}',
};

// Start with the base handler
let handler = new RequestHandler();

// Apply middlewares dynamically
handler = new JsonParserMiddleware(handler);
handler = new AuthMiddleware(handler);
handler = new LoggerMiddleware(handler);

// Process the request
console.log(handler.handle(request));

// Logs:
// [LOG] Request received at: /api/data
// [AUTH] Request authorized
// [PARSER] JSON parsed successfully
// Output:
// Handling request for /api/data
