'use client';

import Card from '@/views/components/card/Card';
import Filter from '@/views/components/filter/Filter';
import { Todo } from '@/libs/entities/todo';
import useTodosViewModel from './useTodosViewModel';

interface TodosProps {
  data: Todo[];
}

export default function Todos(props: TodosProps) {
  const { todos, selectedFilter, setSelectedFilter, toggleTodoCompletion } =
    useTodosViewModel({
      todos: props.data,
    });

  return (
    <>
      <Filter
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />

      {todos?.map((todo) => (
        <Card
          key={todo.id}
          title={todo.task}
          subtitle={todo.category}
          datetime={todo.createdAt}
          isChecked={todo.isCompleted}
          onChecked={() => {
            toggleTodoCompletion(todo.id);
          }}
        />
      ))}
    </>
  );
}
