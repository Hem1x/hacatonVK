import ChartComponent from '@src/component/ChartComponent/ChartComponent';
import React, { useEffect, useState } from 'react';

type chatMockType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}[];

const MetodistPanelChartList = () => {
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
            title: 'Индекс удовлетворенности клиента (NPC)',
            subTitle:
              'график отображает удовлетворённость клиентов рассчитанную по формуле NPC с разделением пользатаелей на: промоутера, нейтрального и критика',
            chartData: mock,
          }}
        />
        <ChartComponent
          type="bar"
          data={{
            title: 'Что нравится пользователям в вебинарах',
            subTitle:
              'График отображает кол-во положительных отзывов по основным категориям оценки преподавателя',
            chartData: mock,
          }}
        />
        <ChartComponent
          type="bar"
          data={{
            title: 'Что не нравится пользователям в вебинарах',
            subTitle:
              'График отображает кол-во отрицательных отзывов по основным категориям оценки преподавателя',
            chartData: mock,
          }}
        />

        <ChartComponent
          type="bar"
          data={{
            title: 'Кому адресован отзыв',
            subTitle: 'График отображает кол-во отзывов адресованных по категориям',
            chartData: mock,
          }}
        />
        <ChartComponent
          data={{
            title: 'Кол-во информативных отзывов',
            subTitle:
              'График отображает кол-во информативных отзывов в динамике периода',
            chartData: mock,
          }}
        />
      </div>
    </div>
  );
};

export default MetodistPanelChartList;
