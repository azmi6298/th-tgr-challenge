import { Todo } from '@/libs/entities/todo';
import useTodosViewModel from '@/views/pages/useTodosViewModel';
import { act, renderHook } from '@testing-library/react';

describe('test useTodosViewModel', () => {
  describe('should sort data ', () => {
    const mockTodos: Todo[] = [
      {
        id: '1',
        task: 'Task A',
        category: 'work',
        createdAt: new Date('2024-10-29T14:15:00.000Z'),
        isCompleted: true,
      },
      {
        id: '2',
        task: 'Task B',
        category: 'personal',
        createdAt: new Date('2024-10-28T08:00:00.000Z'),
        isCompleted: false,
      },
      {
        id: '3',
        task: 'Task C',
        category: 'work',
        createdAt: new Date('2024-10-30T10:30:00.000Z'),
        isCompleted: false,
      },
    ];

    it('should sort data by created at and completed status', () => {
      const expectedResult: Todo[] = [
        {
          id: '3',
          task: 'Task C',
          category: 'work',
          createdAt: new Date('2024-10-30T10:30:00.000Z'),
          isCompleted: false,
        },
        {
          id: '2',
          task: 'Task B',
          category: 'personal',
          createdAt: new Date('2024-10-28T08:00:00.000Z'),
          isCompleted: false,
        },
        {
          id: '1',
          task: 'Task A',
          category: 'work',
          createdAt: new Date('2024-10-29T14:15:00.000Z'),
          isCompleted: true,
        },
      ];

      const { result } = renderHook(() =>
        useTodosViewModel({ todos: mockTodos }),
      );

      expect(result.current.todos).toStrictEqual(expectedResult);
    });
  });

  describe('should filter data by category ', () => {
    const mockTodos: Todo[] = [
      {
        id: '1',
        task: 'Task A',
        category: 'work',
        createdAt: new Date('2024-10-29T14:15:00.000Z'),
        isCompleted: false,
      },
      {
        id: '2',
        task: 'Task B',
        category: 'personal',
        createdAt: new Date('2024-10-28T08:00:00.000Z'),
        isCompleted: false,
      },
      {
        id: '3',
        task: 'Task C',
        category: 'work',
        createdAt: new Date('2024-10-30T10:30:00.000Z'),
        isCompleted: false,
      },
    ];

    it('should filter data by personal category', () => {
      const expectedResult = [
        {
          id: '2',
          task: 'Task B',
          category: 'personal',
          createdAt: new Date('2024-10-28T08:00:00.000Z'),
          isCompleted: false,
        },
      ];

      const { result } = renderHook(() =>
        useTodosViewModel({ todos: mockTodos }),
      );

      act(() => {
        result.current.setSelectedFilter('personal');
      });

      expect(result.current.todos).toStrictEqual(expectedResult);
    });

    it('should filter data by work category', () => {
      const expectedResult = [
        {
          id: '3',
          task: 'Task C',
          category: 'work',
          createdAt: new Date('2024-10-30T10:30:00.000Z'),
          isCompleted: false,
        },
        {
          id: '1',
          task: 'Task A',
          category: 'work',
          createdAt: new Date('2024-10-29T14:15:00.000Z'),
          isCompleted: false,
        },
      ];

      const { result } = renderHook(() =>
        useTodosViewModel({ todos: mockTodos }),
      );

      act(() => {
        result.current.setSelectedFilter('work');
      });

      expect(result.current.todos).toStrictEqual(expectedResult);
    });
  });
});
