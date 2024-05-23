import axios from 'axios';
import { store } from '../store';
import { SEND_MESSAGE_ACTION } from '../store/type-actions';
const BASE_URL = "https://extranet.fcc.org.br/webapi/testecandidato";
export default class ClientsApiService {
    async getClientsList() {
        try {
            const response = await axios.get(`${BASE_URL}/v1/Cliente/Listar`);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch clients data');
        }
    }
    async createClient(client) {
        try {
            const response = await axios.post(`${BASE_URL}/v1/Cliente/Adicionar`, client);
            const message = {
                status: 'success',
                message: 'Cliente cadastrado com sucesso!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
            return response.data;
        }
        catch (error) {
            const message = {
                status: 'error',
                message: 'Erro ao cadastrar os dados do cliente, tente novamente mais tarde!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
            throw new Error('Failed to create client');
        }
    }
    async getClientById(idClient) {
        try {
            const response = await axios.get(`${BASE_URL}/v1/Cliente/ListarPorId/${idClient}`);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed get client by Id');
        }
    }
    async changeDataClient(client) {
        try {
            const response = await axios.put(`${BASE_URL}/v1/Cliente/Alterar`, client);
            const message = {
                status: 'success',
                message: 'Cliente alterado com sucesso!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
            return response.data;
        }
        catch (error) {
            const message = {
                status: 'error',
                message: 'Erro ao editar os dados do cliente, tente novamente mais tarde!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
            throw new Error('Failed edit client');
        }
    }
    async deleteClient(idClient) {
        try {
            await axios.delete(`${BASE_URL}/v1/Cliente/Excluir/${idClient}`);
            const message = {
                status: 'success',
                message: 'Cliente removido com sucesso!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
        }
        catch (error) {
            const message = {
                status: 'error',
                message: 'Não foi possível remover o cliente, tente novamente mais tarde!',
                showInfo: true
            };
            store.dispatch(SEND_MESSAGE_ACTION, message);
            throw new Error('Failed get client by Id');
        }
    }
}
