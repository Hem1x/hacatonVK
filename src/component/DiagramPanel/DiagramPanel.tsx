import React, { useEffect } from 'react';
import StatPanel from '../StatPanel/StatPanel';
import { Cell, Pie, PieChart } from 'recharts';
import DiagramOption from './DiagramOption/DiagramOption';
import s from './DiagramPanel.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);
interface DiagramPanelProp {
  title: string;
  colorList?: string[];
  renderData?: {
    name: string;
    value: number;
  }[];
  size?: number;
  textGap?: number;
  background?: React.CSSProperties['background'];
  noStyle?: boolean;
  isColoredOption?: boolean;
  isMarkedOption?: boolean;
}

const defaultColors = [
  '#FF5733', // Красный
  '#33FF57', // Зелёный
  '#5733FF', // Синий
  '#FFFF33', // Жёлтый
  '#33FFFF', // Бирюзовый
  '#FF33FF', // Фиолетовый
];

const DiagramPanel = ({
  title,
  renderData = [],
  colorList = defaultColors,
  size,
  textGap,
  background,
  noStyle,
  isColoredOption = false,
  isMarkedOption = false,
}: DiagramPanelProp) => {
  const totalSum = renderData.reduce((acc, current) => acc + current.value, 0);
  const editedMock = renderData.map((el, index) => ({
    ...el,
    percent: totalSum === 0 ? 0 : Math.round((el.value / totalSum) * 100),
    color: colorList[index],
  }));
  const isEditedMockEmpty = totalSum === 0;

  return (
    <StatPanel noStyle={noStyle} title={title} background={background}>
      <div className={cn('container')}>
        {isEditedMockEmpty ? (
          <div
            style={{
              width: size ?? 150,
              height: size ?? 150,
              background: '#f2f2f2',
              borderRadius: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <span>Нет данных</span>
          </div>
        ) : (
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
              {renderData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorList[index % colorList.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: textGap ?? 15,
          }}>
          {editedMock.map((data) => (
            <DiagramOption
              key={data.color}
              isColoredOption={isColoredOption}
              isMarkedOption={isMarkedOption && !isEditedMockEmpty}
              data={data}
            />
          ))}
        </div>
      </div>
    </StatPanel>
  );
};

export default DiagramPanel;
