import express from 'express';
import { routers } from './routers';
import cors from 'cors';

const app = express();

const port = 5000;

app.use(cors());

app.use('/news', routers);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
