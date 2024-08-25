import { App } from './app';

import * as http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

http.createServer(new App().server).listen(PORT, async () => {
  console.log(`==== Listening on port ${PORT}\n`);
});