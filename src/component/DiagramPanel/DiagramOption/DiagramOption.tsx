import React from 'react';

interface DiagramOptionProps {
  isMarkedOption?: boolean;
  isColoredOption?: boolean;
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  };
}

const DiagramOption = ({
  data,
  isMarkedOption = false,
  isColoredOption = false,
}: DiagramOptionProps) => {
  const { name, value, percent, color } = data;
  const shouldAddMark = isMarkedOption && color;
  const shouldColorText = isColoredOption && color;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
        {shouldAddMark && (
          <div style={{ width: 10, height: 10, background: color }} />
        )}
        <span style={shouldColorText ? { color: color } : {}}>{name}</span>
        <span style={{ textAlign: 'right', flex: 1 }}>{percent}%</span>
      </div>
    </div>
  );
};

export default DiagramOption;
