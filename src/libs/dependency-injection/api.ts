import { ApiClientImpl } from '../api-client/apiClientImpl';
import { TodosApiImpl } from '../api/todos/todosApiImpl';

const apiClient = new ApiClientImpl(process.env.BASE_APP_URL as string);

export const todosApi = new TodosApiImpl(apiClient);
