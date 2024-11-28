'use client';

import Card from '@/components/card/Card';
import Filter from '@/components/filter/Filter';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <>
      <Header title="To Do" />

      <main className="flex flex-col gap-[10px] px-6 py-9">
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
      </main>
    </>
  );
}
