import 'dotenv/config';
import { createServer } from 'http';
import app from './server.js';

const PORT = process.env.PORT || 4000;

const server = createServer(app);
server.listen(PORT, () => {
  console.log(`ORII backend listening on http://localhost:${PORT}`);
});
