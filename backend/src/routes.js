import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'João Vitor',
    email: 'joaovitorcoelho13@gmail.com',
    password_hash: '1254631542',
  });
  return res.json(user);
});

export default routes;
