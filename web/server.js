const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const dotenv = require('dotenv')
dotenv.config()

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync(process.env.SSL_KEY_FILE),
  cert: readFileSync(process.env.SSL_CRT_FILE)
};

app.prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    })
  });