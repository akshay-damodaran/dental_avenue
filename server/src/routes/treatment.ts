import { Router, Request, Response } from 'express';
import Treatment from '../models/treatment';

const treatment: Router = Router();
const errorData: object = { code: 500 };

treatment.post('/add', async (req: Request, res: Response) => {
  let treatmentBody = new Treatment(req.body);
  try {
    await treatmentBody.save();
    res.send({ code: 200, data: 'Saved' });
  } catch (error) {
    res.send(errorData);
  }
});

treatment.get('/get', async (req: Request, res: Response) => {
  try {
    let treatments = await Treatment.find();
    res.send({ code: 200, data: treatments });
  } catch (error) {
    res.send(errorData);
  }
});

treatment.post('/update', async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    const dataToBeUpdated = req.body;
    let treatments = await Treatment.updateOne({ _id: id }, dataToBeUpdated);
    res.send({ code: 200, data: treatments });
  } catch (error) {
    res.send(errorData);
  }
});

treatment.post('/delete', async (req: Request, res: Response) => {
  try {
    let treatments = await Treatment.deleteOne({ _id: req.body.id });
    res.send({ code: 200, data: treatments });
  } catch (error) {
    res.send(errorData);
  }
});

export default treatment;
