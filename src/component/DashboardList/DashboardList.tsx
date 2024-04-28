import StatPanel from '@src/component/StatPanel/StatPanel';
import classNames from 'classnames/bind';
import s from './DashboardList.module.scss';
import React from 'react';
import DiagramPanel from '@src/component/DiagramPanel/DiagramPanel';
import MetodistPanelChartList from '@src/pages/MetodistPanel/MetodistPanelChartList/MetodistPanelChartList';
import TeactPanelChartList from '@src/pages/TeacherPanel/TeactPanelChartList/TeactPanelChartList';

const cn = classNames.bind(s);

interface DashboardListProps {
  isMetodist?: boolean;
}

const DashboardList = ({ isMetodist = false }: DashboardListProps) => {
  const favotritedData = isMetodist
    ? [
        { name: 'Преподаватель', value: 91 },
        { name: 'Программа', value: 234 },
        { name: 'Вебинар', value: 31 },
      ]
    : [
        { name: 'Качество речи', value: 51 },
        { name: 'Подача материала', value: 70 },
        { name: 'Коммукабельность', value: 37 },
      ];

  const dislikedData = isMetodist
    ? [
        { name: 'Преподаватель', value: 11 },
        { name: 'Программа', value: 40 },
        { name: 'Вебинар', value: 47 },
      ]
    : [
        { name: 'Качество речи', value: 91 },
        { name: 'Подача материала', value: 20 },
        { name: 'Коммукабельность', value: 37 },
      ];

  const userAssesmentData = [
    { name: 'Хорошо', value: 91 },
    { name: 'Удовл.', value: 20 },
    { name: 'Плохо', value: 37 },
  ];

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
      <DiagramPanel
        isMarkedOption
        title={'Что нравится пользователям в системе'}
        renderData={favotritedData}
        colorList={['#0d90c8', '#d40d0d', '#d4600d', '#0dd459']}
      />
      <DiagramPanel
        isMarkedOption
        title={'Что не нравится пользователям'}
        renderData={dislikedData}
        colorList={['#0d98d4', '#d40d0d', '#d4600d', '#0dd459']}
      />
      <DiagramPanel
        isColoredOption
        title={'Оценки пользователей'}
        renderData={userAssesmentData}
        colorList={['#4cbc68', '#ef910d', '#e05b33']}
      />
      {isMetodist ? <MetodistPanelChartList /> : <TeactPanelChartList />}
    </div>
  );
};

export default DashboardList;
