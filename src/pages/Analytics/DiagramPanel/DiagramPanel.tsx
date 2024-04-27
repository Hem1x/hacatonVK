import React from 'react';
import StatPanel from '../StatPanel/StatPanel';
import { Cell, Pie, PieChart } from 'recharts';
import DiagramOption from './DiagramOption/DiagramOption';

interface DiagramPanelProp {
  title: string;
  size?: number;
  textGap?: number;
  background?: React.CSSProperties['background'];
  noStyle?: boolean;
  isColoredOption?: boolean;
  isMarkedOption?: boolean;
}

const COLORS = ['#00C49F', '#FFBB28', '#ff4842', '#42a7ff'];

const DiagramPanel = ({
  title,
  size,
  textGap,
  background,
  noStyle,
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

  console.log(size ? size * 0.3 : 40);

  return (
    <StatPanel noStyle={noStyle} title={title} background={background}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <PieChart width={size ?? 150} height={size ?? 150}>
          <Pie
            data={editedMock}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={size ? size * 0.3 : 40}
            outerRadius={size ? size * 0.5 : 70}
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
            gap: textGap ?? 15,
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
