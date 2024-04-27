import { Card, Flex, Row, Space, Typography } from 'antd';
import React from 'react';

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

const SuggestionsAI = () => {
  return (
    <Flex style={{ width: 700, flexDirection: 'column', gap: 50 }}>
      <div>
        <Typography.Title level={4}>Преложения по улучшению от ИИ</Typography.Title>
        <Typography.Paragraph style={{ color: '#a9a9a9' }}>
          ИИ выявил проблемные мест на основе отзывов и предложил их решение
        </Typography.Paragraph>
        <SuggestionCard
          data={{
            title: 'Требует улучшения: Составление презентации',
            subtitle: 'Предложения по улучшению от ИИ: aoaoaoa',
            percent: 10,
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
            title: 'Требует улучшения: Составление презентации',
            subtitle: 'Предложения по улучшению от ИИ: aoaoaoa',
            percent: 10,
          }}
        />
      </div>
    </Flex>
  );
};

export default SuggestionsAI;
