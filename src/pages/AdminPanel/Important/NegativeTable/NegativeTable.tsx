import { api } from '@src/api/api';
import { TableType } from '@src/api/api.types';
import { Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const NegativeTable = () => {
  const [tableData, setTableData] = useState<TableType[] | null>(null);

  useEffect(() => {
    api.getAdminImportant().then((data) => setTableData(data));
  }, []);

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
      render: (text: string) => <span>{text.slice(1)}</span>,
    },
    {
      width: 200,
      title: 'Положительный / Отрицательный',
      dataIndex: 'is_positive',
      key: 'is_positive',
      render: (text: number) => (
        <span>{text ? 'положительный' : 'отрицательный'}</span>
      ),
    },
    {
      width: 150,
      title: 'Информативность',
      dataIndex: 'relevance',
      key: 'relevance',
      render: (text: number) => (
        <span>{text ? 'информативный' : 'не информативный'}</span>
      ),
    },
    {
      title: 'Кому',
      dataIndex: 'object',
      key: 'object',
      render: (text: string) => (
        <span>
          {text === '0' ? 'вебинар' : text === '1' ? 'программа' : 'преподаватель'}
        </span>
      ),
    },
  ];
  return (
    <div>
      <Typography.Title level={4}>Топ негативных отзывов</Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9' }}>
        Список отзывов в которых возможны срочные/критичные проблемы
      </Typography.Paragraph>

      <Table
        dataSource={tableData as readonly TableType[] | undefined}
        columns={columns}
      />
    </div>
  );
};

export default NegativeTable;
