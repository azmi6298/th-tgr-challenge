import { TodosApi } from './todosApi';
import { ApiClient } from '../../api-client/apiClient';
import { CategoryType, Todo } from '@/libs/entities/todo';
import { TodoApiResponse } from '@/libs/api/todos/todoApiResponse';

export class TodosApiImpl implements TodosApi {
  apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.apiClient.get<TodoApiResponse[]>('/todos2');
    return response.map((res) => ({
      id: res.id,
      task: res.task,
      category: this.transformCategoryApiValue(res.category),
      isCompleted: res.completed,
      createdAt: new Date(res.createdAt),
    }));
  }

  private transformCategoryApiValue(category: string): CategoryType {
    const categoryMap: Record<string, CategoryType> = {
      personal: 'personal',
      work: 'work',
    };

    return categoryMap[category];
  }
}
