const db = require('/conn');

class Books {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    static getById(id) {
        return db.one(`select * from books where id=${id}`)
            .then((burritoData) => {
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
                    const aBook = new Books(
                        bookData.id,
                        bookData.title,
                        bookData.author,
                        bookData.genre
                    );
                    return aBook;
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