import { Router } from 'express';
import userService from '../service/user';
// npm i --save-dev @types/express

const router = Router();
router.post('/register', async (req, res, next) => {
  // TODO add request body validation middleware
  // I omitted this to not make the tutorial too complex
  try {
    await userService.register(req.body.firstName, req.body.email);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).json('something went wrong');
  }
});

export default router;
