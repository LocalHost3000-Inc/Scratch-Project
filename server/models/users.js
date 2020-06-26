const { Pool } = require('pg');

const PG_URI = "postgres://ipclbmkc:6LRwazvpZkOLrrOzxr2wMzaBJpCf0N-1@ruby.db.elephantsql.com:5432/ipclbmkc";

const pool = new Pool({
    connectionString: PG_URI
});


//While we could export the pool from here and just use `pool.query()` directly from the controller, 
//exporting this way let's us controller all the database queries from one file location 
//and any logic or logging that needs to change lives in this one file.
module.exports = {
    query: (text, params, callback) => {
        console.log("Query was executed", text);
        return pool.query(text, params, callback);
    }
}
