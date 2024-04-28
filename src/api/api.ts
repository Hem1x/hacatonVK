import {
  CardType,
  GraphType,
  PersonalCardHttpResult,
  RecommendationType,
  TableType,
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

  async getTeacherGraphs(): Promise<{
    graph1: GraphType;
    graph2: GraphType;
    graph3: GraphType;
  } | null> {
    try {
      const response1 = await fetch(`${this.apiURL}/TeacherGraphs1/`);
      const response2 = await fetch(`${this.apiURL}/TeacherGraphs2/`);
      const response3 = await fetch(`${this.apiURL}/TeacherGraphs3/`);

      const graph1 = await response1.json();
      const graph2 = await response2.json();
      const graph3 = await response3.json();

      return { graph1, graph2, graph3 };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getMetodistGraphs(): Promise<{
    graph1: GraphType;
    graph2: GraphType;
    graph3: GraphType;
    graph5: GraphType;
  } | null> {
    try {
      const response1 = await fetch(`${this.apiURL}/MetodistGraphs1/`);
      const response2 = await fetch(`${this.apiURL}/MetodistGraphs2/`);
      const response3 = await fetch(`${this.apiURL}/MetodistGraphs3/`);
      const response5 = await fetch(`${this.apiURL}/MetodistGraphs5/`);

      const graph1 = await response1.json();
      const graph2 = await response2.json();
      const graph3 = await response3.json();
      const graph5 = await response5.json();

      return { graph1, graph2, graph3, graph5 };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getRecommendations(): Promise<RecommendationType | null> {
    try {
      const response = await fetch(`${this.apiURL}/metodistGetBetter/`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getMetodistTable(): Promise<TableType[] | null> {
    try {
      const response = await fetch(`${this.apiURL}/metodistList/`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getAdminImportant(): Promise<TableType[] | null> {
    try {
      const response = await fetch(`${this.apiURL}/AdminImportant/`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getAdminListMetodist(): Promise<CardType[] | null> {
    try {
      const response = await fetch(`${this.apiURL}/AdminListMetodist/`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getAdminListTeacher(): Promise<CardType[] | null> {
    try {
      const response = await fetch(`${this.apiURL}/AdminListTeacher/`);
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
