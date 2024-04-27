import { Button, Form, Input, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { chatStore } from '@src/store/chatStore/chatStore';
import { api } from '@src/api/api';
import s from './Chat.module.scss';
import classNames from 'classnames/bind';
import Message from './Message/Message';
import { SendOutlined } from '@ant-design/icons';
const cn = classNames.bind(s);

type valueType = {
  text: string;
};

const Chat = observer(() => {
  const chatMessages = chatStore.chatMessages;
  const [form] = Form.useForm();

  const onFinish = (value: valueType) => {
    if (value.text) {
      chatStore.addMessage({
        value: value.text,
        from: 'user',
        date: Date.now(),
      });
      api.sendMessage(value.text).then((data) => {
        chatStore.addMessage({
          value: data.responce,
          from: 'bot',
          date: Date.now(),
        });
      });
      form.resetFields();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Typography.Title>Обратная связь</Typography.Title>

      <div className={cn('chat')}>
        <div className={cn('messages')}>
          {chatMessages.map((messageData) => (
            <Message messageData={messageData} />
          ))}
        </div>

        <div>
          <Form className={cn('form')} form={form} onFinish={onFinish}>
            <Form.Item className={cn('form__input')} name={'text'}>
              <Input autoFocus placeholder="Введите сообщение..." />
            </Form.Item>

            <Form.Item className={cn('form__button')}>
              <Button
                htmlType="submit"
                icon={
                  <SendOutlined
                    style={{ fontSize: '18px' }}
                    className={cn('form__button-icon')}
                  />
                }
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
});

export default Chat;
