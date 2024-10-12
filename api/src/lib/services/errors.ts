export class BadRequestError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Bad Request') {
    super(message);
    this.name = 'BadRequestError';
    this.httpStatusCode = 400;
  }
}

export class UnauthorizedError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
    this.httpStatusCode = 401;
  }
}

export class ForbiddenError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
    this.httpStatusCode = 403;
  }
}

export class NotFoundError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Not Found') {
    super(message);
    this.name = 'NotFoundError';
    this.httpStatusCode = 404;
  }
}

export class RequestTimeoutError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Request Timeout') {
    super(message);
    this.name = 'RequestTimeoutError';
    this.httpStatusCode = 408;
  }
}

export class TooManyRequestsError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Too Many Requests') {
    super(message);
    this.name = 'TooManyRequestsError';
    this.httpStatusCode = 429;
  }
}

export class InternalServerError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Internal Server Error') {
    super(message);
    this.name = 'InternalServerError';
    this.httpStatusCode = 500;
  }
}

export class BadGatewayError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Bad Gateway') {
    super(message);
    this.name = 'BadGatewayError';
    this.httpStatusCode = 502;
  }
}

export class ServiceUnavailableError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Service Unavailable') {
    super(message);
    this.name = 'ServiceUnavailableError';
    this.httpStatusCode = 503;
  }
}

export class GatewayTimeoutError extends Error {
  public httpStatusCode: number;

  constructor(message = 'Gateway Timeout') {
    super(message);
    this.name = 'GatewayTimeoutError';
    this.httpStatusCode = 504;
  }
}
