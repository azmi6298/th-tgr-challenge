import Layout from '@/views/components/layout/Layout';
import { todosApi } from '@/libs/dependency-injection/api';
import Todos from '@/views/pages/Todos';

export default async function Home() {
  const todos = await todosApi.getTodos();

  return (
    <Layout>
      <Todos data={todos} />
    </Layout>
  );
}
