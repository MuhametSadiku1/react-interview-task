import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index';
import jobsitesRouter from './routes/jobsites';
import itemsRouter from './routes/items';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobsites', jobsitesRouter);
app.use('/items', itemsRouter);

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
