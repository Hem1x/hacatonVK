import { Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import s from './MetodistPanel.module.scss';
import classNames from 'classnames/bind';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
import SuggestionsAI from '@src/component/SuggestionsAI/SuggestionsAI';
const cn = classNames.bind(s);

const MetodistPanel = () => {
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
      <Typography.Title>Панель методиста</Typography.Title>
      <PersonalCard />
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default MetodistPanel;
