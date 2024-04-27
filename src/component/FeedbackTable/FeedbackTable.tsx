import { Table } from 'antd';
import React from 'react';

const FeedbackTable = () => {
  const dataSource = [
    {
      key: '1',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
    },
    {
      key: '2',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
    },
    {
      key: '3',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
    },
    {
      key: '4',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
    },
  ];

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
    },
    {
      title: 'Положительный / Отрицательный',
      dataIndex: 'isPositive',
      key: 'isPositive',
    },
    {
      title: 'Информативность',
      dataIndex: 'isInformative',
      key: 'isInformative',
    },
    {
      title: 'Кому',
      dataIndex: 'to',
      key: 'to',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default FeedbackTable;
