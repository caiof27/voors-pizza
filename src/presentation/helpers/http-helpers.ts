import { ServerError } from '../errors';
import { HttpResponse } from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
  name: error?.name,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const createdSuccess = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});