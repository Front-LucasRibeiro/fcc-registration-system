import axios from 'axios';
const BASE_URL = "https://my-json-server.typicode.com/Front-LucasRibeiro/fcc-registration-system";
export default class LoginApiService {
    async getUserLogin() {
        try {
            const response = await axios.get(`${BASE_URL}/login`);
            if (response.status === 200) {
                return response.data;
            }
            else {
                throw new Error(`Error fetching user login: ${response.statusText}`);
            }
        }
        catch (error) {
            throw error;
        }
    }
}
