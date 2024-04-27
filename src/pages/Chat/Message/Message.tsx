import classNames from 'classnames/bind';
import s from './Message.module.scss';
import { timestampToTime } from '../../../utils/timestampToTime';
import { MessageType } from '@src/store/chatStore/chatStore.types';

const cn = classNames.bind(s);

interface MessageProps {
  messageData: MessageType;
}

const Message = ({ messageData }: MessageProps) => {
  const { id, value, date, from } = messageData;
  return (
    <div
      className={cn(`message`)}
      style={{ alignSelf: from === 'bot' ? 'flex-start' : 'flex-end' }}
      key={id}>
      <div className={cn(`message__${from}`)}>
        <div className={cn(`message__${from}-date`)}>{timestampToTime(date)}</div>
        <div className={cn(`message__${from}-text`)}>{value}</div>
      </div>
    </div>
  );
};

export default Message;
