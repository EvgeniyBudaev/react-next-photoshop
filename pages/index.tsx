import React, { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { Layout } from '../components/layout/Layout';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size="l">Большой</Ptag>
      <Ptag>Средний</Ptag>
      <Ptag size="s">Маленький</Ptag>
      <Tag size='s' color='green'>Small</Tag>
      <Tag size='m' color='red'>Medium</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </Layout>
  );
}
