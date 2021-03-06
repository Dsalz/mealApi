import 'babel-polyfill';
import express from 'express';

//Routers
import mealRouter from './routes/api/meals';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.use('/meals', mealRouter);
app.use('/', (req, res) => res.status(404).send({message: 'Invalid Route'}));

app.listen(port, () => console.log(`Serving on port ${port}`))