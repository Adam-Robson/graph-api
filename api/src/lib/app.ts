import fs from 'node:fs';
import path from 'node:path';
import morgan from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import express, { Request, Response } from 'express';
import usersRouter from './routes/users';
import errorHandler from './middlewares/error';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
const logDirectory = path.join(__dirname, '/logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '/logs/access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(morgan('dev'));

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Application is running.');
});

app.use('/api/users', usersRouter);

app.use(errorHandler);

export default app;
