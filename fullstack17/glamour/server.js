import { createServer } from 'vite';
import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'src/store/db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
app.use(middlewares);

// Add custom routes before JSON Server routes
app.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
app.use(jsonServer.bodyParser);

// Use default router
app.use(router);

// Start JSON Server
const jsonServerPort = process.env.JSON_SERVER_PORT || 3001;
app.listen(jsonServerPort, () => {
  console.log(`JSON Server is running on port ${jsonServerPort}`);
});

// Start Vite dev server
const vitePort = process.env.VITE_PORT || 5173;
createServer({
  server: {
    port: vitePort,
  },
}).then((vite) => {
  vite.listen();
  console.log(`Vite dev server is running on port ${vitePort}`);
});
