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
  val: number;
}[];

interface ChartComponentProps {
  type?: 'linear' | 'bar';
  isNPC?: boolean;
  data: {
    title: string;
    subTitle: string;
    chartData: chatMockType;
  };
}

const ChartComponent = ({
  data,
  type = 'linear',
  isNPC = false,
}: ChartComponentProps) => {
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
            <linearGradient
              id={isNPC ? 'colorNPC' : 'colorVal'}
              x1="0"
              y1="0"
              x2="0"
              y2="1">
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
            dataKey={isNPC ? 'NPC' : 'val'}
            stroke="#8884d8"
            fillOpacity={1}
            fill={isNPC ? 'url(#colorNPC)' : 'url(#colorVal)'}
          />
        </AreaChart>
      ) : (
        <BarChart width={divBox && divBox * 0.6} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="val" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};

export default ChartComponent;
