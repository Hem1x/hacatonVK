import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Button, Flex, Space, Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import Main from './Main/Main';
import Important from './Important/Important';
import { api } from '@src/api/api';
import FileSaver from 'file-saver';

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

  const onClick = () => {
    api.getExelData();
  };

  return (
    <div>
      <Space direction="horizontal" style={{ alignItems: 'center', gap: 30 }}>
        <Typography.Title>Панель админа</Typography.Title>
        <Button style={{ marginBottom: 15 }} onClick={onClick}>
          Получить данные
        </Button>
      </Space>

      <Tabs defaultActiveKey="main" items={items} />
    </div>
  );
};

export default AdminPanel;
