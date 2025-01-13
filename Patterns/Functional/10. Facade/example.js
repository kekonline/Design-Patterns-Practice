// Subsystems (Complex Logic)
const LocalStorage = {
    storeFile: (file) => {
        console.log(`Storing file locally: ${file.name}`);
    },
};

const CloudStorage = {
    storeFile: (file) => {
        console.log(`Uploading file to cloud: ${file.name}`);
    },
};

const ImageProcessing = {
    resizeImage: (file) => {
        console.log(`Resizing image: ${file.name}`);
    },
    optimizeImage: (file) => {
        console.log(`Optimizing image: ${file.name}`);
    },
};

// Facade
const FileUploadFacade = {
    uploadFile: function (file) {
        console.log(`Starting upload for ${file.name}`);

        // If file is an image, apply image processing
        if (file.type === 'image') {
            ImageProcessing.resizeImage(file);
            ImageProcessing.optimizeImage(file);
        }

        // If the file is small, store it locally, otherwise upload to cloud
        if (file.size < 5000000) { // Less than 5MB
            LocalStorage.storeFile(file);
        } else {
            CloudStorage.storeFile(file);
        }

        console.log(`Upload complete for ${file.name}`);
    },
};

// Usage
const smallFile = { name: 'small-image.jpg', type: 'image', size: 3000000 }; // 3MB
const largeFile = { name: 'big-video.mp4', type: 'video', size: 20000000 }; // 20MB

FileUploadFacade.uploadFile(smallFile); // Process small file
FileUploadFacade.uploadFile(largeFile); // Process large file
