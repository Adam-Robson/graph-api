import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof Error) {
    console.error(`Error: ${err.message}`);
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unknown error occurred',
    });
    _next(err);
  }
}
