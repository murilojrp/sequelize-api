import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
require('./models/index')
//import routes from './routes';
//import { isAuthenticated } from './utils/isAuthenticated';

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/usuario', async (req, res) => {
    Usuario.create({
        username: 'kunzgabriel',
        password: '12345'
    })
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`);
});