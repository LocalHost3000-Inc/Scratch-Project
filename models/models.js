const { pool } = require('pg')

// pool to manage our connections to the database (has a few advantages). 
// There is overhead in establishing new connections to the database that we don't want to wait on for every single query we send. 
// Having a pool of connections at the ready makes our database queries more performant.
// The PostgreSQL server can only handle a limited number of clients at a time.
// Depending on the available memory of your PostgreSQL server you may even crash the server if you connect an unbounded number of clients.PostgreSQL can only process one query at a time on a single connected client in a first-in first-out manner. If your multi-tenant web application is using only a single connected client all queries among all simultaneous requests will be pipelined and executed serially, one after the other. No good!

// PostgreSQL can only process one query at a time on a single connected client in a first-in first-out manner. If your multi-tenant web application is using only a single connected client all queries among all simultaneous requests will be pipelined and executed serially, one after the other. No good!


const PG_URI = 'postgres://ysnmrnto:hraE9Loc7oB5lrz_DpGNAfokED8Do7gG@ruby.db.elephantsql.com:5432/ysnmrnto';