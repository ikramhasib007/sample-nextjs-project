require('./config');

const express = require('express');
const next = require('next');
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/sample', (req, res) => {
      const actualPage = '/sample';
      const queryParams = req.params; 
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/', (req, res) => {
      const actualPage = '/index';
      app.render(req, res, actualPage, req.params);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })