import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Flex, Space, Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import Main from './Main/Main';
import Important from './Important/Important';

const AdminPanel = () => {
  const items: TabsProps['items'] = [
    {
      key: 'main',
      label: 'главная',
      children: <Main />,
    },
    {
      key: 'important',
      label: 'важное',
      children: <Important />,
    },
  ];

  return (
    <div>
      <Typography.Title>Панель админа</Typography.Title>
      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default AdminPanel;
