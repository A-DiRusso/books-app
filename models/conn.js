//first require 'pg-promise'
// call it immidetly which gives you a configured database connector
//then define the connection options 
const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'books-app'
};

//make a connection to the database sepcified by the options object
const db = pgp(options);
module.exports = db;
