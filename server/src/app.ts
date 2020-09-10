import express, { Application } from 'express';
import { json } from 'body-parser';

import patientRoute from './routes/patient';
import adminRoute from './routes/admin';
import treatmentRoute from './routes/treatment';

const cors = require('cors');

const app: Application = express();

app.use(json());
app.use(cors());

app.use('/patient', patientRoute);
app.use('/admin', adminRoute);
app.use('/treatment', treatmentRoute);

export default app;
