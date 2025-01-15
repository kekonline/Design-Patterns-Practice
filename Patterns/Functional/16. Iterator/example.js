// Functional Iterator for Blog Post Pagination
function* paginatePosts(posts, pageSize) {
    for (let i = 0; i < posts.length; i += pageSize) {
        yield posts.slice(i, i + pageSize);
    }
}

// Example Usage
const blogPosts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6",
    "Post 7",
];

const pageSize = 3; // Number of posts per page
const postIterator = paginatePosts(blogPosts, pageSize);

for (const page of postIterator) {
    console.log("Page:", page);
}
