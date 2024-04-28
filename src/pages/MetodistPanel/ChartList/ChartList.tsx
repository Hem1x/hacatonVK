import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type chatMockType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}[];

interface ChartComponentProps {
  type?: 'linear' | 'bar';
  data: {
    title: string;
    subTitle: string;
    chartData: chatMockType;
  };
}

const ChartComponent = ({ data, type = 'linear' }: ChartComponentProps) => {
  const { title, subTitle, chartData } = data;
  const [divBox] = useState<number | undefined>(
    document.querySelector('#content')?.clientWidth,
  );

  return (
    <div>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Paragraph style={{ color: '#a9a9a9', marginBottom: 20 }}>
        {subTitle}
      </Typography.Paragraph>
      {type === 'linear' ? (
        <AreaChart
          width={divBox && divBox * 0.6}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      ) : (
        <BarChart width={730} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
};

const ChartList = ({ isMetodist }: { isMetodist: boolean }) => {
  const [mock, setMock] = useState<chatMockType>();
  const mockData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    setMock(mockData);
  }, []);

  if (!mock) {
    return <h1>Нет данных</h1>;
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 50,
        }}>
        <ChartComponent
          data={{
            title: 'Индекс удовлетворенности пользователей',
            subTitle: 'График отображает вероятность ухода данного клиента',
            chartData: mock,
          }}
        />
        <ChartComponent
          type="bar"
          data={{
            title: 'Что нравится пользователям в вебинарах',
            subTitle:
              'График отображает кол-во информативных отзывов за выбранный период по выбранным настройкам',
            chartData: mock,
          }}
        />
        <ChartComponent
          type="bar"
          data={{
            title: 'Что не нравится пользователям в вебинарах',
            subTitle:
              'График отображает кому адресован отзыв по категориям: преподаватель, вебинар, программа',
            chartData: mock,
          }}
        />
        {isMetodist && (
          <>
            <ChartComponent
              type="bar"
              data={{
                title: 'Кому адресован отзыв',
                subTitle:
                  'График отображает кому адресован отзыв по категориям: преподаватель, вебинар, программа',
                chartData: mock,
              }}
            />
            <ChartComponent
              data={{
                title: 'Кол-во информативных отзывов',
                subTitle:
                  'График отображает кому адресован отзыв по категориям: преподаватель, вебинар, программа',
                chartData: mock,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChartList;
