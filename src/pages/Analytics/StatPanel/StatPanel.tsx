import { Typography } from 'antd';
import React from 'react';
import s from './StatPanel.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(s);

const StatPanel = ({
  width,
  title,
  children,
}: {
  width?: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={width ? { width } : {}} className={cn('container')}>
      <Typography.Title className={cn('title')} level={5}>
        {title}
      </Typography.Title>
      {children}
    </div>
  );
};

export default StatPanel;
