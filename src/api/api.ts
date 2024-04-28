import { MessageHttpResult } from './api.types';

type MetodistPersonalCardHttpResult = {
  percent_of_good_reviews: number;
  percent_like_present: number;
  percent_like_knowledgepractice: number;
  percent_like_knowledge: number;
};

type MetodistTotalHttpResult = {
  percent_of_good_reviews: number;
  percent_of_bad_reviews: number;
  percent_of_good_inf_reviews: number;
  percent_of_bad_inf_reviews: number;
  percent_object_0: number;
  percent_object_1: number;
  percent_object_2: number;
  percent_notlike_present: number;
  percent_notlike_knowledgePractice: number;
  percent_notlike_knowledge: number;
  marks_good: number;
  marks_middle: number;
  marks_bad: number;
};

class Api {
  apiURL;

  constructor(apiURL: string) {
    this.apiURL = apiURL;
  }

  async getMetodistPersonalCard(): Promise<
    MetodistPersonalCardHttpResult | undefined
  > {
    try {
      const response = await fetch(`${this.apiURL}/MetodistPersonalCard/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async getMetodistTotal(): Promise<MetodistTotalHttpResult | undefined> {
    try {
      const response = await fetch(`${this.apiURL}/MetodistPersonalCard/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return;
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
