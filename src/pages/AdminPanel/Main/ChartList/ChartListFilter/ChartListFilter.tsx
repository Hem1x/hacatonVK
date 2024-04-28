import { Button, Radio, Space, Typography } from 'antd';
import React from 'react';

const ChartListFilter = () => {
  return (
    <div>
      <Typography.Title level={3}>Фильтры</Typography.Title>

      <Space direction="vertical" style={{ gap: 20, marginBottom: 30 }}>
        <div>
          <Typography.Title level={5}>Преподаватели</Typography.Title>
          <Radio.Group defaultValue={1}>
            <Space direction="vertical">
              <Radio value={1}>Иванов</Radio>
              <Radio value={2}>Петров</Radio>
              <Radio value={3}>Сидоров</Radio>
              <Radio value={4}>Попов</Radio>
            </Space>
          </Radio.Group>
        </div>

        <div>
          <Typography.Title level={5}>Программы</Typography.Title>
          <Radio.Group defaultValue={1}>
            <Space direction="vertical">
              <Radio value={1}>Менеджемент</Radio>
              <Radio value={2}>Frontend</Radio>
              <Radio value={3}>Backend</Radio>
              <Radio value={4}>Data science</Radio>
            </Space>
          </Radio.Group>
        </div>

        <div>
          <Typography.Title level={5}>Период</Typography.Title>
          <Radio.Group defaultValue={1}>
            <Space direction="vertical">
              <Radio value={1}>7 дней</Radio>
              <Radio value={2}>14 дней</Radio>
              <Radio value={3}>месяц</Radio>
            </Space>
          </Radio.Group>
        </div>
      </Space>

      <Button
        style={{
          width: '100%',
          background: '#FFCF08',
          color: 'black',
          fontWeight: 700,
        }}>
        Применить
      </Button>
    </div>
  );
};

export default ChartListFilter;
