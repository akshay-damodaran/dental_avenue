import { Router, Request, Response } from 'express';
import Patient from '../models/patient';
const patient: Router = Router();

patient.post('/add', async (req: Request, res: Response) => {
  try {
    const p = new Patient(req.body);
    const result = await p.save();
    res.send({ code: 200, data: result.id });
  } catch (e) {
    res.send({code:500});
  }
});

patient.post('/update', async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    const dataToBeUpdated = req.body;
    const result = await Patient.updateOne({ _id: id }, dataToBeUpdated);
    res.send({ code: 200, data: result });
  } catch (e) {
    res.status(500).send(e);
  }
});

patient.get('/get', async (req: Request, res: Response) => {
  try {
    const result = await Patient.find(req.query);
    res.send({ code: 200, data: result });
  } catch (e) {
    res.status(500).send(e);
  }
});

patient.post('/delete', async (req: Request, res: Response) => {
  try {
    const result = await Patient.deleteOne({ _id: req.body.id });
    res.send({ code: 200, data: result });
  } catch (e) {
    res.status(500).send(e);
  }
});

export default patient;
