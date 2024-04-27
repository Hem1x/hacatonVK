import React from 'react';
import s from './PersonalCard.module.scss';
import classNames from 'classnames/bind';
import { Avatar, Card, Flex } from 'antd';
import Jason from '../../../public/photo.png';
import DiagramPanel from '@src/pages/Analytics/DiagramPanel/DiagramPanel';
const cn = classNames.bind(s);

const PersonalCard = () => {
  return (
    <Card className={cn('card')}>
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
              <h1 className={cn('name')}>Александр Невский</h1>
              <p className={cn('position')}>Методист</p>
              <p className={cn('program')}>"Основы программирования"</p>
            </div>
          </Flex>

          <div className={cn('stat')}>
            <p className={cn('stat__name')}>Положительные отзывы:</p>
            <span className={cn('stat__value')}>10%</span>
          </div>
        </div>

        <DiagramPanel
          size={100}
          textGap={5}
          noStyle
          isMarkedOption
          title={'Что нравиться пользователям'}
        />
      </Flex>
    </Card>
  );
};

export default PersonalCard;
