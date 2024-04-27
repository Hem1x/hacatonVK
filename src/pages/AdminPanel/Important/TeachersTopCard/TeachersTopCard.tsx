import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Table, Typography } from 'antd';
import React from 'react';

const TeachersTopCard = () => {
  const items = [
    <PersonalCard
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
    <PersonalCard
      userData={{
        name: 'Александр Иванов',
        isMetodist: false,
        program: 'Основы менеджмента',
        percent: 40,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
    <PersonalCard
      userData={{
        name: 'Александр Петров',
        isMetodist: true,
        program: 'Основы менеджмента',
        percent: 20,
      }}
      renderData={[
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ]}
    />,
    <PersonalCard
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
      <Typography.Title level={4}>
        Топ преподавателей по негативным отзывов
      </Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9' }}>
        Список преподавателей с самыми отрицательными отзывами
      </Typography.Paragraph>

      <Carousel title="" items={items} />
    </div>
  );
};

export default TeachersTopCard;
