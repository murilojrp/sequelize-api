import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import routes from './routes';
require('./models/index')
//import { isAuthenticated } from './utils/isAuthenticated';

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

routes(app);
app.use((req, res) => {
  res.status(404).send('404 - Página não encontrada')
});

app.listen(3024, () => {
  console.log(`Example app listening on port 3024!`);
});