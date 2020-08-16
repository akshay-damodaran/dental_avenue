import { Router, Request, Response } from 'express';
import Admin from '../models/admin';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const admin: Router = Router();

admin.get('/', (req: Request, res: Response) => {
  res.send('Admin Route');
});

admin.post('/login', async (req: Request, res: Response) => {
  // To save password
  // const str = bcrypt.hashSync('password', 10);
  // const adminObj: IAdmin = new Admin({
  //   username: 'username',
  //   password: str,
  // });
  // adminObj.save();
  const adminObj = await Admin.findOne({
    username: req.body.username,
  });
  // check if user exists
  if (!adminObj) {
    return res.status(401).send('Invalid User');
  }
  const passwordMatched = bcrypt.compareSync(req.body.password, adminObj.password);
  // Check if password matches
  if (!passwordMatched) {
    return res.status(401).send('Invalid Password');
  }
  // Create token
  const token = jwt.sign({
    username: adminObj.username,
  }, 'secret', {
    expiresIn: '1d',
  });

  // Verify token   Jo ki middleware mein hona chaiye
  // try {
  //   const decoded = jwt.verify(token, 'secret');
  //   console.log(decoded);
  //   // ACL handling
  // } catch (e) {
  //   return res.status(401).send('Invalid Token');
  // }
  return res.json({
    name: 'Akshay',
    id: 4,
    token,
  });
});

export default admin;
