// Abstract class
class Page {
    render() {
        const data = this.fetchData();
        const content = this.prepareContent(data);
        this.renderHTML(content);
    }

    fetchData() {
        throw new Error("fetchData() must be implemented");
    }

    prepareContent(data) {
        throw new Error("prepareContent() must be implemented");
    }

    renderHTML(content) {
        console.log(`Rendering HTML: ${content}`);
    }
}

// Concrete subclass: BlogPage
class BlogPage extends Page {
    fetchData() {
        console.log("Fetching blog data from API...");
        return { title: "My Blog Post", body: "This is a blog post content." };
    }

    prepareContent(data) {
        console.log("Preparing blog content...");
        return `<h1>${data.title}</h1><p>${data.body}</p>`;
    }
}

// Concrete subclass: ProductPage
class ProductPage extends Page {
    fetchData() {
        console.log("Fetching product data from database...");
        return { name: "Awesome Gadget", price: 99.99 };
    }

    prepareContent(data) {
        console.log("Preparing product content...");
        return `<h1>${data.name}</h1><p>Price: $${data.price}</p>`;
    }
}

// Usage
const blogPage = new BlogPage();
console.log("Rendering Blog Page:");
blogPage.render();

console.log("\nRendering Product Page:");
const productPage = new ProductPage();
productPage.render();
