export type CategoryType = 'personal' | 'work';

export type Todo = {
  id: string;
  task: string;
  category: CategoryType;
  isCompleted: boolean;
  createdAt: Date;
};
