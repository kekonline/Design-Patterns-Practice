class BookCollection {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    createIterator() {
        return new BookIterator(this.books);
    }
}

class BookIterator {
    constructor(books) {
        this.books = books;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.books[this.index++];
        }
        return null;
    }

    hasNext() {
        return this.index < this.books.length;
    }
}

// Usage
const myBooks = new BookCollection();
myBooks.addBook("The Great Gatsby");
myBooks.addBook("1984");
myBooks.addBook("To Kill a Mockingbird");

const iterator = myBooks.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
