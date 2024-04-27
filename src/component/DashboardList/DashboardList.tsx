import StatPanel from '@src/pages/Analytics/StatPanel/StatPanel';
import classNames from 'classnames/bind';
import s from './DashboardList.module.scss';
import React from 'react';
import DiagramPanel from '@src/pages/Analytics/DiagramPanel/DiagramPanel';

const cn = classNames.bind(s);
const DashboardList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
      }}>
      <StatPanel title={'Удовлетворенность'}>
        <div className={cn('satisfied')}>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Положительные отзывы</p>
            <span className={cn('satisfied__group-good')}>10%</span>
          </div>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Отрицательные отзывы</p>
            <span className={cn('satisfied__group-bad')}>10%</span>
          </div>
        </div>
      </StatPanel>

      <StatPanel title={'Информативность отзывов'}>
        <div className={cn('satisfied')}>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Информативные</p>
            <span className={cn('satisfied__group-good')}>10%</span>
          </div>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Неинформативные</p>
            <span className={cn('satisfied__group-bad')}>10%</span>
          </div>
        </div>
      </StatPanel>
      <DiagramPanel isMarkedOption title={'Что нравиться пользователям в системе'} />
      <DiagramPanel isMarkedOption title={'Что не нравиться пользователям'} />
      <DiagramPanel isColoredOption title={'Оценки пользователей'} />
    </div>
  );
};

export default DashboardList;
