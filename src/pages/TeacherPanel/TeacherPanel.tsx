import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
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
      children: 'ничего',
    },
  ];

  return (
    <div>
      <Typography.Title>Панель преподавателя</Typography.Title>
      <PersonalCard />
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default TeacherPanel;
