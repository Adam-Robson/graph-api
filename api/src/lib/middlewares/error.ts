import { Request, Response, NextFunction } from 'express';
import { InternalServerError } from '../services/errors';

/**
 * Express middleware function to catch and handle any errors in the application.
 *
 * The middleware logs the error to the console and sends a JSON response
 * with a status code and an error object containing the error name and
 * message. If the error does not have an `httpStatusCode` property, it will
 * use a status code of 500 and use the `InternalServerError` error
 * as the error object.
 *
 * @param {unknown} err - The error object to be handled
 * @param {Request} req - The Express request object
 * @param {Response} res - The Express response object
 * @param {NextFunction} next - The Express next function
 */
export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Remove in production, for development purposes only
  console.info('This is the error, displayed for debugging');
  console.info(err);
  console.info('This is the request, displayed for debugging');
  console.info(req);
  console.info('This is the response, displayed for debugging');
  console.info(res);
  if (err instanceof Error) {
    if (
      'httpStatusCode' in err &&
      typeof err.httpStatusCode === 'number'
    ) {
      res.status(err.httpStatusCode).json({
        error: err.name,
        message: err.message
      });
    } else {
      res.status(500).json({
        error: InternalServerError,
        message:
          new InternalServerError().message ??
          'An unexpected error occurred'
      });
    }
  } else {
    res.status(500).json({
      error: InternalServerError,
      message:
        new InternalServerError().message ??
        'An unexpected error occurred'
    });
  }

  next();
}
