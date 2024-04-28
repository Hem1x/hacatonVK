import StatPanel from '@src/component/StatPanel/StatPanel';
import classNames from 'classnames/bind';
import s from './DashboardList.module.scss';
import React, { useEffect, useState } from 'react';
import DiagramPanel from '@src/component/DiagramPanel/DiagramPanel';
import MetodistPanelChartList from '@src/pages/MetodistPanel/MetodistPanelChartList/MetodistPanelChartList';
import TeactPanelChartList from '@src/pages/TeacherPanel/TeactPanelChartList/TeactPanelChartList';
import { PersonalCardHttpResult, TotalHttpResult } from '@src/api/api.types';
import { api } from '@src/api/api';

const cn = classNames.bind(s);

interface DashboardListProps {
  isMetodist?: boolean;
}

const DashboardList = ({ isMetodist = false }: DashboardListProps) => {
  const [metodistTotal, setMetodistTotal] = useState<TotalHttpResult | null>(null);
  const [teacherTotal, setTeacherTotal] = useState<TotalHttpResult | null>(null);

  useEffect(() => {
    if (isMetodist) {
      api.getMetodistTotal().then((data) => {
        setMetodistTotal(data);
      });
    } else {
      api.getTeacherTotal().then((data) => {
        setTeacherTotal(data);
      });
    }
  }, []);

  const favotritedData = isMetodist
    ? [
        { name: 'Вебинар', value: metodistTotal?.percent_object_0 ?? 0 },
        { name: 'Программа', value: metodistTotal?.percent_object_1 ?? 0 },
        { name: 'Преподаватель', value: metodistTotal?.percent_object_2 ?? 0 },
      ]
    : [
        { name: 'Вебинар', value: teacherTotal?.percent_object_0 ?? 0 },
        { name: 'Программа', value: teacherTotal?.percent_object_1 ?? 0 },
        { name: 'Преподаватель', value: teacherTotal?.percent_object_2 ?? 0 },
      ];

  const dislikedData = isMetodist
    ? [
        {
          name: 'Отсуствие структуры вебинара',
          value: metodistTotal?.percent_notlike_present ?? 0,
        },
        {
          name: 'Неактуальный материал',
          value: metodistTotal?.percent_notlike_knowledge ?? 0,
        },
        {
          name: 'Неактуальные примеры',
          value: metodistTotal?.percent_notlike_knowledgePractice ?? 0,
        },
      ]
    : [
        { name: 'Плохая речь', value: teacherTotal?.percent_notlike_present ?? 0 },
        {
          name: 'Плохое знание материала',
          value: teacherTotal?.percent_notlike_knowledge ?? 0,
        },
        {
          name: 'Плохая коммуникабельность',
          value: teacherTotal?.percent_notlike_knowledgePractice ?? 0,
        },
      ];

  const userAssesmentData = isMetodist
    ? [
        { name: 'Хорошо', value: metodistTotal?.marks_good ?? 0 },
        { name: 'Удовл.', value: metodistTotal?.marks_middle ?? 0 },
        { name: 'Плохо', value: metodistTotal?.marks_bad ?? 0 },
      ]
    : [
        { name: 'Хорошо', value: teacherTotal?.marks_good ?? 0 },
        { name: 'Удовл.', value: teacherTotal?.marks_middle ?? 0 },
        { name: 'Плохо', value: teacherTotal?.marks_bad ?? 0 },
      ];

  const statData = isMetodist
    ? {
        inf: {
          good: ((metodistTotal?.percent_of_good_inf_reviews ?? 0) * 100).toFixed(0),
          bad: ((metodistTotal?.percent_of_bad_inf_reviews ?? 0) * 100).toFixed(0),
        },
        reviews: {
          good: ((metodistTotal?.percent_of_good_reviews ?? 0) * 100).toFixed(0),
          bad: ((metodistTotal?.percent_of_bad_reviews ?? 0) * 100).toFixed(0),
        },
      }
    : {
        inf: {
          good: ((teacherTotal?.percent_of_good_inf_reviews ?? 0) * 100).toFixed(0),
          bad: ((teacherTotal?.percent_of_bad_inf_reviews ?? 0) * 100).toFixed(0),
        },
        reviews: {
          good: ((teacherTotal?.percent_of_good_reviews ?? 0) * 100).toFixed(0),
          bad: ((teacherTotal?.percent_of_bad_reviews ?? 0) * 100).toFixed(0),
        },
      };

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
            <span className={cn('satisfied__group-good')}>
              {statData.reviews.good}%
            </span>
          </div>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Отрицательные отзывы</p>
            <span className={cn('satisfied__group-bad')}>
              {statData.reviews.bad}%
            </span>
          </div>
        </div>
      </StatPanel>

      <StatPanel title={'Информативность отзывов'}>
        <div className={cn('satisfied')}>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Информативные</p>
            <span className={cn('satisfied__group-good')}>{statData.inf.good}%</span>
          </div>
          <div className={cn('satisfied__group')}>
            <p className={cn('satisfied__group-title')}>Неинформативные</p>
            <span className={cn('satisfied__group-bad')}>{statData.inf.bad}%</span>
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
        title={'Что не нравится пользователям в уроках'}
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
