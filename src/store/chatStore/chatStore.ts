import { autorun, makeAutoObservable } from 'mobx';
import { MessageType } from './chatStore.types';

class Chat {
  chatMessages: MessageType[] = [
    { from: 'bot', value: 'Здравствуйте', date: Date.now() },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(value: MessageType) {
    this.chatMessages.unshift({ ...value, id: this.chatMessages.length });
  }
}

export const chatStore = new Chat();

autorun(() => {
  console.log(chatStore.chatMessages);
});
