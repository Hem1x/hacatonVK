import PersonalCard from '@src/component/PersonalCard/PersonalCard';
import Carousel from '@src/shared/Carousel/Carousel';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import ChartList from './ChartList/ChartList';
import { CardType } from '@src/api/api.types';
import { api } from '@src/api/api';

const Main = () => {
  const [metodistList, setMetodistList] = useState<CardType[] | null>(null);
  const [teacherList, setTeacherList] = useState<CardType[] | null>(null);

  useEffect(() => {
    api.getAdminListMetodist().then((data) => setMetodistList(data));
    api.getAdminListTeacher().then((data) => setTeacherList(data));
  }, []);

  const metodists = metodistList?.map((metodist) => (
    <PersonalCard
      key={metodist.name}
      userData={{
        name: metodist.name,
        isMetodist: true,
        program: metodist.programm,
        percent: +(metodist.percent_of_good_reviews * 100).toFixed(0),
      }}
      renderData={[
        { name: 'Качество речи', value: metodist.percent_like_knowledge },
        { name: 'Подача материала', value: metodist.percent_like_knowledgepractice },
        { name: 'Коммукабельность', value: metodist.percent_like_present },
      ]}
    />
  ));

  const teachers = teacherList?.map((teacher) => (
    <PersonalCard
      key={teacher.name}
      userData={{
        name: teacher.name,
        isMetodist: false,
        program: teacher.programm,
        percent: +(teacher.percent_of_good_reviews * 100).toFixed(0),
      }}
      renderData={[
        { name: 'Качество речи', value: teacher.percent_like_knowledge },
        { name: 'Подача материала', value: teacher.percent_like_knowledgepractice },
        { name: 'Коммукабельность', value: teacher.percent_like_present },
      ]}
    />
  ));

  return (
    <div>
      {metodists && <Carousel title="Методисты" items={metodists} />}
      {teachers && <Carousel title="Преподаватели" items={teachers} />}
      <ChartList />
    </div>
  );
};

export default Main;
