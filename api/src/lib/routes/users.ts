import { Router, Request, Response } from 'express';
import { getUserData } from '../utils/client';

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    try {
      console.info(`${req.method} ${req.url} ${req.body}`);
      const users = await getUserData();
      res.json(users);
    } catch (err) {
      console.error(
        'Error in /api/users route: ',
        err instanceof Error ? err.message : err
      );
      res.status(500).json({
        error: 'Failed to fetch user data from Microsoft Graph.'
      });
    }
  }
);

export default router;
