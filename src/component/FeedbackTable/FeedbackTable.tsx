import { api } from '@src/api/api';
import { TableType } from '@src/api/api.types';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';

interface FeedbackTable {
  isMetodist?: boolean;
}

const FeedbackTable = ({ isMetodist = false }) => {
  const [metodistTable, setMetodistTable] = useState<TableType[] | null>(null);

  useEffect(() => {
    api.getMetodistTable().then((data) => setMetodistTable(data));
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
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
      width: 200,
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
    <Table
      dataSource={metodistTable as readonly TableType[] | undefined}
      columns={columns}
    />
  );
};

export default FeedbackTable;
