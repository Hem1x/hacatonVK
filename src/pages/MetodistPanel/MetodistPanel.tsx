import { Avatar, Card, Flex, Tabs, TabsProps, Typography } from 'antd';
import Jason from '../../../public/photo.png';
import React from 'react';
import s from './MetodistPanel.module.scss';
import classNames from 'classnames/bind';
import DiagramPanel from '../Analytics/DiagramPanel/DiagramPanel';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
const cn = classNames.bind(s);

const MetodistPanel = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

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
      <Typography.Title>Панель методиста</Typography.Title>
      <PersonalCard />
      <Tabs defaultActiveKey="main" items={items} onChange={onChange} />
    </div>
  );
};

export default MetodistPanel;
