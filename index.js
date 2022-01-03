import express from 'express';
import bodyParser from 'body-parser';
import crudRoutes from './routes/crud.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/crud',crudRoutes);

app.listen(PORT,() => console.log(`Server App is Running`));