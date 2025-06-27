import { Router, Request, Response } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (_req: Request, res: Response) => {
  res.json({ title: 'Express' });
});

export default router;
