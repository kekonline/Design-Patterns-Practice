// A pure function to simulate loading an image (RealImage equivalent)
const loadImage = (filename) => {
    console.log(`Loading image from server: ${filename}`);
    return {
        filename,
        display: () => console.log(`Displaying image: ${filename}`),
    };
};

// A factory function for creating a virtual proxy
const createImageProxy = (filename) => {
    let realImage = null; // Encapsulate state within the closure

    return {
        display: () => {
            if (!realImage) {
                // Lazy initialization: load the image only when needed
                realImage = loadImage(filename);
            }
            realImage.display();
        },
    };
};

// Example Usage
const image = createImageProxy("photo.jpg");

console.log("Image proxy created, but not loaded yet.");
image.display(); // Loads and displays the image
image.display(); // Directly displays the already loaded image
