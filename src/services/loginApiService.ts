import axios from 'axios';
import ILogin from '../types/ILogin';

const BASE_URL = 'https://my-json-server.typicode.com/Front-LucasRibeiro/fcc-registration-system';

export default class LoginApiService {
  async getUserLogin(): Promise<ILogin[]> {
    try {
      const response = await axios.get<ILogin[]>(`${BASE_URL}/login`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error fetching user login: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}