import { Form, Radio, Select, Space, Typography } from 'antd';
import classNames from 'classnames/bind';
import s from './Analytics.module.scss';
import StatPanel from './StatPanel/StatPanel';
import DiagramPanel from './DiagramPanel/DiagramPanel';
import { useEffect, useState } from 'react';

const cn = classNames.bind(s);

type ActiveChartType = 'teacher' | 'webinar';

const Analytics = () => {
  const [form] = Form.useForm();
  const [activeChartType, setActiveChartType] = useState<ActiveChartType>('teacher');

  const onFinish = () => {};

  useEffect(() => {
    form.resetFields();
  }, [activeChartType, form]);

  const selectData = [
    '454354354354353',
    '645654654',
    '234324234',
    '987978978',
    '22312313123',
    '098778756443',
    '346547876543',
  ];

  return (
    <div>
      <Typography.Title>Аналитика отзывов</Typography.Title>

      <div style={{ marginTop: 30 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ marginBottom: 10 }}>
            <h3 style={{ fontWeight: 500, marginBottom: 10 }}>
              Выберете вид аналитики
            </h3>
            <p style={{ color: '#898989' }}>
              Выберите по какой категории хотите посмотреть статистику
            </p>
          </div>
          <Radio.Group
            defaultValue={'teacher'}
            value={activeChartType}
            onChange={(e) => setActiveChartType(e.target.value as ActiveChartType)}>
            <Space direction="vertical">
              <Radio value={'teacher'}>По преподавателю</Radio>
              <Radio value={'webinar'}>По вебинару</Radio>
            </Space>
          </Radio.Group>
        </div>

        <Form form={form} onFinish={onFinish}>
          <Space direction="vertical" style={{ display: 'flex' }}>
            <Form.Item
              name={'teacherId'}
              hidden={activeChartType === 'webinar'}
              label="">
              <Space direction="vertical">
                <div style={{ marginBottom: 10 }}>
                  <h3 style={{ fontWeight: 500 }}>Выберите преподавателя</h3>
                  <p style={{ color: '#898989' }}>
                    Необходимо для отображения индивидуальносй статистики
                  </p>
                </div>

                <Select placeholder="Выбрать преподавателя" className="form__select">
                  {selectData.map((item) => (
                    <Select.Option value={item}>{item}</Select.Option>
                  ))}
                </Select>
              </Space>
            </Form.Item>

            <Form.Item
              name={'webinarId'}
              hidden={activeChartType === 'teacher'}
              label="">
              <Space direction="vertical">
                <div style={{ marginBottom: 10 }}>
                  <h3 style={{ fontWeight: 500 }}>Выберите вебинар</h3>
                  <p style={{ color: '#898989' }}>
                    Необходимо для отображения индивидуальносй статистики
                  </p>
                </div>

                <Select placeholder="Выбрать преподавателя" className="form__select">
                  {selectData.map((item) => (
                    <Select.Option value={item}>{item}</Select.Option>
                  ))}
                </Select>
              </Space>
            </Form.Item>
          </Space>
        </Form>
      </div>

      <div>
        <div style={{ marginBottom: 25 }}>
          <h1 style={{ color: '#0066FF', fontSize: 16 }}>Всего отзывов</h1>
          <span style={{ fontSize: 24, fontWeight: 700 }}>
            30
            <span
              style={{
                color: '#a9a9a9',
                fontSize: 12,
                fontWeight: 400,
                marginLeft: 2,
              }}>
              шт
            </span>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 50,
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
          <DiagramPanel isMarkedOption title={'Что нравиться пользователям'} />
          <DiagramPanel isColoredOption title={'Что нравиться пользователям'} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
