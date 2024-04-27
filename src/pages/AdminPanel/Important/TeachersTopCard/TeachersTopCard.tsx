import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import { Table, Typography } from 'antd';
import React from 'react';

const TeachersTopCard = () => {
  return (
    <div>
      <Typography.Title level={4}>
        Топ преподавателей по негативным отзывов
      </Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9' }}>
        Список преподавателей с самыми отрицательными отзывами
      </Typography.Paragraph>

      <PersonalCard />
    </div>
  );
};

export default TeachersTopCard;
