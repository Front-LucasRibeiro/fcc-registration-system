import axios from 'axios';
import IClient from '../types/IClient';

const BASE_URL = 'https://my-json-server.typicode.com/Front-LucasRibeiro/fcc-registration-system';

export default class ClientsApiService {
  async getClientsList(): Promise<IClient[]> {
    try {
      const response = await axios.get<IClient[]>(`${BASE_URL}/clients`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch clients data');
    }
  }

  async createClient(client: IClient): Promise<any> {
    try {
      const response = await axios.post<IClient>(`${BASE_URL}/clients`, client);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw new Error('Failed to create client');
    }
  }
}
