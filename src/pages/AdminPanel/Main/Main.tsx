import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Typography } from 'antd';
import React from 'react';

const Main = () => {
  const items = [
    <PersonalCard
      key={'1'}
      userData={{
        name: 'Александр Иванов',
        isMetodist: true,
        program: 'Основы менеджмента',
        percent: 10,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
    <PersonalCard
      key={'2'}
      userData={{
        name: 'Александр Невский',
        isMetodist: false,
        program: 'Основы менеджмента',
        percent: 10,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
    <PersonalCard
      key={'3'}
      userData={{
        name: 'Александр Петров',
        isMetodist: true,
        program: 'Основы менеджмента',
        percent: 10,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
    <PersonalCard
      key={'4'}
      userData={{
        name: 'Александр Невский',
        isMetodist: true,
        program: 'Основы менеджмента',
        percent: 10,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
  ];

  return (
    <div>
      <Carousel title="Методисты" items={items} />
      <Carousel title="Преподаватели" items={items} />
    </div>
  );
};

export default Main;
