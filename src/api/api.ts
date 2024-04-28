import {
  MessageHttpResult,
  PersonalCardHttpResult,
  TotalHttpResult,
} from './api.types';

class Api {
  apiURL;

  constructor(apiURL: string) {
    this.apiURL = apiURL;
  }

  async getMetodistPersonalCard(): Promise<PersonalCardHttpResult | null> {
    try {
      const response = await fetch(`${this.apiURL}/MetodistPersonalCard/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getTeacherPersonalCard(): Promise<PersonalCardHttpResult | null> {
    try {
      const response = await fetch(`${this.apiURL}/TeacherPersonalCard/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getMetodistTotal(): Promise<TotalHttpResult | null> {
    try {
      const response = await fetch(`${this.apiURL}/MetodistTotal/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getTeacherTotal(): Promise<TotalHttpResult | null> {
    try {
      const response = await fetch(`${this.apiURL}/TeacherTotal/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getExelData() {
    try {
      const response = await fetch(`${this.apiURL}/exel_data/`);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `df_${new Date().toISOString().slice(0, 10)}.xlsx`,
      );

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  }
}

const apiBaseURL = 'https://alexbobr.ru';
export const api = new Api(apiBaseURL);
