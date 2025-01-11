class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log(`Loading image: ${this.filename}`);
    // Simulate a time-consuming operation (e.g., loading from disk or server)
    this.content = 'Image content loaded';
  }

  display() {
    console.log(`Displaying: ${this.filename}`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  loadImage() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename); // Load the real image only when needed
    }
  }

  display() {
    this.loadImage(); // Ensure the real image is loaded before displaying it
    this.realImage.display();
  }
}

// Usage:
const proxyImage = new ImageProxy('high-resolution-image.jpg');
proxyImage.display(); // This will load and display the image
proxyImage.display(); // This will only display the image without loading it again
