import { Tabs, TabsProps, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import s from './MetodistPanel.module.scss';
import classNames from 'classnames/bind';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
import SuggestionsAI from '@src/component/SuggestionsAI/SuggestionsAI';
import { PersonalCardHttpResult } from '@src/api/api.types';
import { api } from '@src/api/api';
const cn = classNames.bind(s);

const MetodistPanel = () => {
  const [data, setData] = useState<PersonalCardHttpResult | null>(null);

  useEffect(() => {
    api.getMetodistPersonalCard().then((data) => setData(data));
  }, []);

  const items: TabsProps['items'] = [
    {
      key: 'main',
      label: 'главная',
      children: <DashboardList isMetodist />,
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
      {data && (
        <PersonalCard
          userData={{
            name: 'Лебедев',
            isMetodist: true,
            program: 'Основы програмирования',
            percent: +(data.percent_of_good_reviews * 100).toFixed(0),
          }}
          renderData={[
            { name: 'Качественная презентация', value: data.percent_like_present },
            {
              name: 'Актуальность материала',
              value: data.percent_like_knowledgepractice,
            },
            {
              name: 'Актуальные бизнес примеры',
              value: data.percent_like_knowledge,
            },
          ]}
        />
      )}
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default MetodistPanel;
