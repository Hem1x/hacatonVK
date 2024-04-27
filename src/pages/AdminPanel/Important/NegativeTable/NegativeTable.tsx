import { Table, Typography } from 'antd';
import React from 'react';

const NegativeTable = () => {
  const dataSource = [
    {
      key: '1',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      percent: 80,
    },
    {
      key: '2',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      percent: 80,
    },
    {
      key: '3',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      percent: 80,
    },
    {
      key: '4',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      percent: 80,
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      width: 500,
      title: 'Текст',
      dataIndex: 'text',
      key: 'text',
    },
    {
      width: 200,
      title: 'Положительный / Отрицательный',
      dataIndex: 'isPositive',
      key: 'isPositive',
    },
    {
      width: 150,
      title: 'Информативность',
      dataIndex: 'isInformative',
      key: 'isInformative',
    },
    {
      title: 'Кому',
      dataIndex: 'to',
      key: 'to',
    },
    {
      title: 'Процент негативности отзыва',
      dataIndex: 'percent',
      key: 'percent',
      render: (text: string) => <span style={{ color: 'red' }}>{text}%</span>,
    },
  ];
  return (
    <div>
      <Typography.Title level={4}>Топ негативных отзывов</Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9' }}>
        Список отзывов в которых возможны срочные/критичные проблемы
      </Typography.Paragraph>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default NegativeTable;
