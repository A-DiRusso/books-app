const db = require('./conn');

class Books {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    static getById(id) {
        return db.one(`select * from books where id=${id}`)
            .then((bookData) => {
                const bookInstance = new Books(bookData.id,
                                               bookData.title,
                                               bookData.author,
                                               bookData.genre
                                               );
                return bookInstance;
            })
            .catch(() => {
                return null;
            })
    }

    static getAll() {
        return db.any(`select * from books`)
            .then((arrayOfBooks) => {
                return arrayOfBooks.map((bookData) => {
                    const allBooks = new Books(
                        bookData.id,
                        bookData.title,
                        bookData.author,
                        bookData.genre
                    );
                    console.log(allBooks);
                    return allBooks;
                });
            })
    }
    save() {
        return db.result(`
        update book set
        title=${this.title},
        author=${this.author},
        genre=${this.genre},
    where id=${this.id}
        `)
    }

}

module.exports = Books;