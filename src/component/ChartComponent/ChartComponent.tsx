import { Typography } from 'antd';
import { useState } from 'react';
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
      <Typography.Paragraph
        style={{ color: '#a9a9a9', marginBottom: 20, width: '80%' }}>
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
        <BarChart width={divBox && divBox * 0.6} height={250} data={chartData}>
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

export default ChartComponent;
