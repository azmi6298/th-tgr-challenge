export interface ApiClient {
  get<T>(url: string, headers?: Record<string, string>): Promise<T>;
}
