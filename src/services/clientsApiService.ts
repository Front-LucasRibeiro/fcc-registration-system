import axios from 'axios';
import IClient from '../types/IClient';
import ILogin from '../types/ILogin';

const BASE_URL = 'https://my-json-server.typicode.com/Front-LucasRibeiro/fcc-registration-sytem';

export default class ClientsApiService {
  async getClientsList(): Promise<ILogin[]> {
    try {
      const response = await axios.get<ILogin[]>(`${BASE_URL}/v1/Cliente/Listar`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error fetching clients list: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}