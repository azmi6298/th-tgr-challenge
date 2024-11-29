'use client';

import Card from '@/components/card/Card';
import Filter from '@/components/filter/Filter';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Filter />

      <Card
        title="Buy a"
        subtitle="Personal"
        datetime="2024/11/3 11:24"
        isChecked={true}
        onChecked={() => {}}
      />

      <Card
        title="Buy b"
        subtitle="Personal"
        datetime="2024/11/3 11:24"
        isChecked={false}
        onChecked={() => {}}
      />
    </Layout>
  );
}
