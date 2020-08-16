import { Router, Request, Response } from 'express';
import Treatment from '../models/treatment';

const treatment: Router = Router();

treatment.get('/', (req: Request, res: Response) => {
  Treatment.find()
    .then((treatments) => res.send(treatments));
});

treatment.get('/input', (req: Request, res: Response) => {
  const treatment1 = new Treatment({
    name: 'qwer',
    price: 1000,
  });

  treatment1.save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Error'));
});

export default treatment;
