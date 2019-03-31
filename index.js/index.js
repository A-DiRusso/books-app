const http = require('http');

const Books = require('../models/books');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer( async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // res.end('Hello World');

    if (req.url === '/books') {
        const allBooks = await Books.getAll();
        const booksJSON = JSON.stringify(allBooks);
        res.end(booksJSON);
    } else {
        res.end(`{
            message: "Read a book"
        }`)
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});