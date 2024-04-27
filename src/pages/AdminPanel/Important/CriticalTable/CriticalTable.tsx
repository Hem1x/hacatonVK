import { Table, Typography } from 'antd';

enum feedbackStatus {
  Critical = 'Критичный',
}

const CriticalTable = () => {
  const dataSource = [
    {
      key: '1',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      status: feedbackStatus.Critical,
    },
    {
      key: '2',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      status: feedbackStatus.Critical,
    },
    {
      key: '3',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      status: feedbackStatus.Critical,
    },
    {
      key: '4',
      id: 8950423423,
      text: 'njnbjldnfjbfdg',
      isPositive: 'нет',
      isInformative: 'да',
      to: 'Максим Максимыч',
      status: feedbackStatus.Critical,
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
      title: 'Статус отзыва',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => <span style={{ color: 'red' }}>{text}</span>,
    },
  ];
  return (
    <div>
      <Typography.Title style={{ color: 'red' }} level={4}>
        Топ критических отзывов
      </Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9' }}>
        Список отзывов в которых возможны срочные/критичные проблемы
      </Typography.Paragraph>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CriticalTable;
