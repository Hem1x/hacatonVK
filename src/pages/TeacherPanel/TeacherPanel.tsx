import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import SuggestionsAI from '@src/component/SuggestionsAI/SuggestionsAI';
import { Tabs, TabsProps, Typography } from 'antd';
import React from 'react';

const TeacherPanel = () => {
  const items: TabsProps['items'] = [
    {
      key: 'main',
      label: 'главная',
      children: <DashboardList />,
    },
    {
      key: 'feedbackList',
      label: 'список отзывов',
      children: <FeedbackTable />,
    },
    {
      key: 'recommendation',
      label: 'что улучшить?',
      children: <SuggestionsAI />,
    },
  ];

  return (
    <div>
      <Typography.Title>Панель преподавателя</Typography.Title>
      <PersonalCard
        userData={{
          name: 'Николай Невский',
          isMetodist: false,
          program: 'Основы менеджмента',
          percent: 43,
        }}
        renderData={[
          { name: 'Качество речи', value: 51 },
          { name: 'Подача материала', value: 70 },
          { name: 'Коммукабельность', value: 37 },
        ]}
      />
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default TeacherPanel;
