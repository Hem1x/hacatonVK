import React from 'react';
import StatPanel from '../StatPanel/StatPanel';
import { Cell, Pie, PieChart } from 'recharts';
import DiagramOption from './DiagramOption/DiagramOption';

interface DiagramPanelProp {
  title: string;
  isColoredOption?: boolean;
  isMarkedOption?: boolean;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DiagramPanel = ({
  title,
  isColoredOption = false,
  isMarkedOption = false,
}: DiagramPanelProp) => {
  const mock = [
    { name: 'Качество преподавания', value: 91 },
    { name: 'Качество преподавания', value: 20 },
    { name: 'Качество преподавания', value: 37 },
    { name: 'Качество преподавания', value: 5 },
  ];
  const totalSum = mock.reduce((acc, current) => acc + current.value, 0);
  const editedMock = mock.map((el, index) => ({
    ...el,
    percent: Math.round((el.value / totalSum) * 100),
    color: COLORS[index],
  }));

  return (
    <StatPanel title={title}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <PieChart width={150} height={150}>
          <Pie
            data={editedMock}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value">
            {mock.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
          {editedMock.map((data) => (
            <DiagramOption
              isColoredOption={isColoredOption}
              isMarkedOption={isMarkedOption}
              data={data}
            />
          ))}
        </div>
      </div>
    </StatPanel>
  );
};

export default DiagramPanel;
