import { ApiClient } from './apiClient';

export class ApiClientImpl implements ApiClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'x-api-key': process.env.BASE_API_KEY as string,
      },
    });

    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        message: response.statusText,
      });
    }

    return (await response.json()) as T;
  }
}
