import { Router, Request, Response } from 'express';
import Patient from '../models/patient';

const patient: Router = Router();

patient.post('/', async (req: Request, res: Response) => {
  try {
    const p = new Patient(req.body);
    const result = await p.save();
    res.send({ id: result.id });
  } catch (e) {
    res.status(500).send(e);
  }
});

patient.get('/get', async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const result = await Patient.find({ name: q });
    res.send({ id: result });
  } catch (e) {
    res.status(500).send(e);
  }
});

export default patient;
