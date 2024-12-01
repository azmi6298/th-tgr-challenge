import { CategoryType, Todo } from '@/libs/entities/todo';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface UseTodosViewModelProps {
  todos: Todo[];
}

export default function useTodosViewModel({
  todos: initialTodos,
}: UseTodosViewModelProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>();

  const sortedTodos = useMemo(
    () =>
      todos.slice().sort((a, b) => {
        if (a.isCompleted !== b.isCompleted) {
          return Number(a.isCompleted) - Number(b.isCompleted);
        }
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }),
    [todos],
  );

  const filteredTodos = useMemo(
    () =>
      selectedFilter
        ? sortedTodos.filter((todo) => todo.category === selectedFilter)
        : sortedTodos,
    [sortedTodos, selectedFilter],
  );

  const toggleTodoCompletion = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  }, []);

  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);

  return {
    todos: filteredTodos,
    selectedFilter,
    setSelectedFilter,
    toggleTodoCompletion,
  };
}
