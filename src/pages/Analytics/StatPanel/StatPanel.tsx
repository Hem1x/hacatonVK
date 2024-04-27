import { Typography } from 'antd';
import React from 'react';
import s from './StatPanel.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(s);

const StatPanel = ({
  noStyle = false,
  width,
  title,
  children,
}: {
  noStyle?: boolean;
  width?: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: width ? width : undefined,
        border: noStyle ? 'none' : undefined,
      }}
      className={cn({ container: !noStyle })}>
      <Typography.Title
        style={{
          fontWeight: noStyle ? 300 : undefined,
          fontSize: noStyle ? 15 : undefined,
        }}
        className={cn('title')}
        level={5}>
        {title}
      </Typography.Title>
      {children}
    </div>
  );
};

export default StatPanel;
