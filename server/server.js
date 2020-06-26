const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/apiRouter.js');

/* GLOBAL HANDLERS */
app.use(express.json());

/* ROUTES */
app.use('/api', apiRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));



app.listen(3000, () => console.log('Listening on port 3000'));