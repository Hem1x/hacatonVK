import { MessageHttpResult } from './api.types';

class Api {
  apiURL;

  constructor(apiURL: string) {
    this.apiURL = apiURL;
  }

  async sendMessage(value: string): Promise<MessageHttpResult> {
    try {
      const response = await fetch(`${this.apiURL}/model/?text=${value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { responce: '' };
    }
  }
}

const apiBaseURL = 'https://alexbobr.ru';
export const api = new Api(apiBaseURL);
