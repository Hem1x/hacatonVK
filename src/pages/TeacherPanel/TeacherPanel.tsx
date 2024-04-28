import { api } from '@src/api/api';
import { PersonalCardHttpResult } from '@src/api/api.types';
import DashboardList from '@src/component/DashboardList/DashboardList';
import FeedbackTable from '@src/component/FeedbackTable/FeedbackTable';
import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import SuggestionsAI from '@src/component/SuggestionsAI/SuggestionsAI';
import { Tabs, TabsProps, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const TeacherPanel = () => {
  const [data, setData] = useState<PersonalCardHttpResult | null>(null);

  useEffect(() => {
    api.getTeacherPersonalCard().then((data) => setData(data));
  }, []);

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
      {data && (
        <PersonalCard
          userData={{
            name: 'Николай Невский',
            isMetodist: false,
            program: 'Основы менеджмента',
            percent: +(data.percent_of_good_reviews * 100).toFixed(0),
          }}
          renderData={[
            {
              name: 'Доступно объясняет материал',
              value: data.percent_like_present,
            },
            {
              name: 'Коммуникабельность',
              value: data.percent_like_knowledgepractice,
            },
            {
              name: 'Хорошо осведомленность в тематике',
              value: data.percent_like_knowledge,
            },
          ]}
        />
      )}
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default TeacherPanel;
