import { Todo } from '@/libs/entities/todo';

export interface TodosApi {
  getTodos(): Promise<Todo[]>;
}
