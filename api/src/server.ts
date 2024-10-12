import path from 'node:path';
import app from './lib/app';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT ?? 7891;

app.listen(port, () => {
  console.info(`Server up & listening at port ${port}`);
});
console.info('Current working directory:', process.cwd());
