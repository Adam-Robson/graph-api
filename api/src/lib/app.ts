import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

import { fileURLToPath } from 'url';

import express, { Request, Response } from 'express';
import usersRouter from './routes/users';
import errorHandler from './middlewares/error';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.use(morgan('dev'));

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Application is running.');
});

app.use('/api/users', usersRouter);

app.use(errorHandler);

export default app;
