import { faker } from '@faker-js/faker';

import { TodosApiImpl } from '../../../libs/api/todos/todosApiImpl';
import { Todo } from '@/libs/entities/todo';
import { ApiClientImpl } from '../../../libs/api-client/apiClientImpl';
import { TodoApiResponse } from '../../../libs/api/todos/todoApiResponse';

describe('test todos api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockTodosApiResponse: TodoApiResponse[] = [
    {
      id: faker.string.uuid(),
      category: 'personal',
      task: faker.string.alpha(),
      completed: faker.datatype.boolean(),
      createdAt: faker.date.anytime().toISOString(),
    },
  ];

  const mockTodos: Todo[] = [
    {
      id: mockTodosApiResponse[0].id,
      task: mockTodosApiResponse[0].task,
      category: 'personal',
      createdAt: new Date(mockTodosApiResponse[0].createdAt),
      isCompleted: mockTodosApiResponse[0].completed,
    },
  ];

  const mockTodosApi = new TodosApiImpl(
    new ApiClientImpl(faker.string.alpha()),
  );

  it('should hit correct todos endpoint', async () => {
    const mockGetApi = jest.spyOn(ApiClientImpl.prototype, 'get');
    mockGetApi.mockResolvedValueOnce(mockTodosApiResponse);

    await mockTodosApi.getTodos();

    expect(mockGetApi).toHaveBeenCalledWith(`/todos2`);
  });

  it('should return todos data when success', async () => {
    const mockGetApi = jest.spyOn(ApiClientImpl.prototype, 'get');
    mockGetApi.mockResolvedValueOnce(mockTodosApiResponse);

    const result = await mockTodosApi.getTodos();

    expect(result).toStrictEqual(mockTodos);
  });

  it('should return error data when error', async () => {
    const mockGetApi = jest.spyOn(ApiClientImpl.prototype, 'get');
    const mockError = {
      status: 400,
      message: faker.string.alpha(),
    };
    mockGetApi.mockRejectedValueOnce(mockError);

    await expect(mockTodosApi.getTodos()).rejects.toEqual(mockError);

    expect(mockGetApi).toHaveBeenCalledWith(`/todos2`);
  });
});
