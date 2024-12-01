import { CategoryType, Todo } from '@/libs/entities/todo';
import { useEffect, useState } from 'react';

interface UseTodosViewModelProps {
  todos: Todo[];
}

export default function useTodosViewModel(props: UseTodosViewModelProps) {
  const [todos, setTodos] = useState<Todo[]>();
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>();
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>();

  useEffect(() => {
    setTodos(sortTodos(props.todos));
  }, [props.todos]);

  useEffect(() => {
    if (todos) {
      setFilteredTodos(sortTodos(filterTodosByCategory(todos, selectedFilter)));
    }
  }, [todos, selectedFilter]);

  function sortTodos(todos: Todo[]): Todo[] {
    return todos.sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return Number(a.isCompleted) - Number(b.isCompleted);
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  function filterTodosByCategory(
    todos: Todo[],
    category: CategoryType | undefined,
  ): Todo[] {
    return category
      ? todos.filter((todo) => todo.category === category)
      : todos;
  }

  function toggleTodoCompletion(id: string) {
    setTodos((prevTodos) =>
      prevTodos?.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  }

  return {
    todos: filteredTodos || todos,

    selectedFilter,
    setSelectedFilter,

    toggleTodoCompletion,
  };
}
