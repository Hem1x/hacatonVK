import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Typography } from 'antd';
import React from 'react';

const Main = () => {
  const items = [
    <PersonalCard key={'1'} />,
    <PersonalCard key={'2'} />,
    <PersonalCard key={'3'} />,
    <PersonalCard key={'4'} />,
  ];

  return (
    <div>
      <Typography.Title level={4}>Методисты</Typography.Title>
      <Carousel items={items} />

      <Typography.Title level={4}>Преподаватели</Typography.Title>
      <Carousel items={items} />
    </div>
  );
};

export default Main;
