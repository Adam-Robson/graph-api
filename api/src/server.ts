import dotenv from 'dotenv';
import app from './lib/app';

dotenv.config();

const port = process.env.PORT ?? 7891;

app.listen(port, () => {
  console.info(`Server up & listening at port ${port}`);
});
