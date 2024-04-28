import { api } from '@src/api/api';
import { GraphType } from '@src/api/api.types';
import ChartComponent from '@src/component/ChartComponent/ChartComponent';
import React, { useEffect, useState } from 'react';

type graphsType = {
  graph1: GraphType;
  graph2: GraphType;
  graph3: GraphType;
} | null;

const TeactPanelChartList = () => {
  const [graphs, setGraphs] = useState<graphsType>();

  useEffect(() => {
    api.getTeacherGraphs().then((data) => setGraphs(data));
  }, []);

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
        {graphs?.graph1 && (
          <ChartComponent
            isNPC
            data={{
              title: 'Индекс удовлетворенности клиента (NPC)',
              subTitle:
                'график отображает удовлетворённость клиентов рассчитанную по формуле NPC с разделением пользатаелей на: промоутера, нейтрального и критика',
              chartData: graphs.graph1,
            }}
          />
        )}
        {graphs?.graph2 && (
          <ChartComponent
            type="bar"
            data={{
              title: 'Что нравится пользователям в вебинарах',
              subTitle:
                'График отображает кол-во положительных отзывов по основным категориям оценки преподавателя',
              chartData: graphs.graph2,
            }}
          />
        )}
        {graphs?.graph3 && (
          <ChartComponent
            type="bar"
            data={{
              title: 'Что не нравится пользователям в вебинарах',
              subTitle:
                'График отображает кол-во отрицательных отзывов по основным категориям оценки преподавателя',
              chartData: graphs.graph3,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TeactPanelChartList;
