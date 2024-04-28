import { api } from '@src/api/api';
import { RecommendationType } from '@src/api/api.types';
import { Card, Flex, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

interface SuggestionCardProps {
  data: {
    title: string;
    subtitle: string;
    percent: number;
  };
}

const SuggestionCard = ({ data }: SuggestionCardProps) => {
  const { title, subtitle, percent } = data;
  return (
    <Card style={{ width: '100%', boxShadow: '1px 1px 10px #cecece' }}>
      <Space direction="vertical">
        <div>
          <Typography.Title level={5}>{title}</Typography.Title>
          <Typography.Paragraph>{subtitle}</Typography.Paragraph>
        </div>
        <div>
          <p style={{ color: '#bbb' }}>
            Процент негативных отзывов по этой категории
          </p>
          <span style={{ color: 'red', fontSize: 20 }}>{percent} %</span>
        </div>
      </Space>
    </Card>
  );
};

interface SuggestionsAIProps {
  isMetodist?: boolean;
}

const SuggestionsAI = ({ isMetodist = false }) => {
  const [recommendations, setRecomendations] = useState<RecommendationType | null>(
    null,
  );

  useEffect(() => {
    api.getRecommendations().then((data) => {
      setRecomendations(data);
    });
  }, []);

  const needImprove = isMetodist ? recommendations?.need_improve : 'Коммуникация';
  const studentSuggestion = isMetodist ? recommendations?.student_suggestion : '';

  return (
    <Flex style={{ width: 700, flexDirection: 'column', gap: 50 }}>
      <div>
        <Typography.Title level={4}>Преложения по улучшению от ИИ</Typography.Title>
        <Typography.Paragraph style={{ color: '#a9a9a9' }}>
          ИИ выявил проблемные мест на основе отзывов и предложил их решение
        </Typography.Paragraph>
        <SuggestionCard
          data={{
            title: `Требует улучшения: ${needImprove}`,
            subtitle: 'Предложения по улучшению от ИИ',
            percent: needImprove?.length === 0 ? 0 : 10,
          }}
        />
      </div>
      <div>
        <Typography.Title level={4}>
          Преложения по улучшению от учеников
        </Typography.Title>
        <Typography.Paragraph style={{ color: '#a9a9a9' }}>
          Обобщенные и классифицированные предложения учеников по улучшению программы
        </Typography.Paragraph>
        <SuggestionCard
          data={{
            title: `Требует улучшения: ${studentSuggestion}`,
            subtitle: 'Предложения по улучшению от учеников',
            percent: studentSuggestion?.length === 0 ? 0 : 10,
          }}
        />
      </div>
    </Flex>
  );
};

export default SuggestionsAI;
