import React from 'react';
import s from './PersonalCard.module.scss';
import classNames from 'classnames/bind';
import { Avatar, Card, Flex } from 'antd';
import Jason from '../../../public/photo.png';
import DiagramPanel from '@src/component/DiagramPanel/DiagramPanel';
const cn = classNames.bind(s);

const PersonalCard = ({
  key,
  userData = {
    name: null,
    isMetodist: false,
    program: null,
    percent: null,
  },
  renderData = [],
}: {
  key?: string;
  userData?: {
    name: string | null;
    isMetodist: boolean | null;
    program: string | null;
    percent: number | null;
  };
  renderData?: {
    name: string;
    value: number;
  }[];
}) => {
  const { name, percent, isMetodist, program } = userData;

  return (
    <Card key={key} className={cn('card')}>
      <Flex align="top" wrap="wrap">
        <div>
          <Flex gap={30}>
            <Avatar
              className={cn('card__img')}
              shape="circle"
              size={64}
              icon={<img src={Jason} />}
            />
            <div className={cn('card__text')}>
              <h1 className={cn('name')}>{name}</h1>
              <p className={cn('position')}>
                {isMetodist ? 'Методист' : 'Преподаватель'}
              </p>
              <p className={cn('program')}>"{program}"</p>
            </div>
          </Flex>

          <div className={cn('stat')}>
            <p className={cn('stat__name')}>Положительные отзывы:</p>
            <span className={cn('stat__value')}>{percent}%</span>
          </div>
        </div>

        <DiagramPanel
          size={100}
          textGap={5}
          noStyle
          isMarkedOption
          title={'Что нравиться пользователям'}
          renderData={renderData}
          colorList={['#0d90c8', '#d40d0d', '#d4600d', '#0dd459']}
        />
      </Flex>
    </Card>
  );
};

export default PersonalCard;
