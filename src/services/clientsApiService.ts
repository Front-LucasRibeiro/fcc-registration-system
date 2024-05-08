import axios from 'axios';
import IClient from '../types/IClient';
import { store } from '../store';
import IInfo from '../types/IInfo';
import { SEND_MESSAGE_ACTION } from '../store/type-actions';

const BASE_URL = "https://extranet.fcc.org.br/webapi/testecandidato";


export default class ClientsApiService {
  async getClientsList(): Promise<IClient[]> {
    try {
      const response = await axios.get<IClient[]>(`${BASE_URL}/v1/Cliente/Listar`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch clients data');
    }
  }

  async createClient(client: IClient): Promise<any> {
    try {
      const response = await axios.post<IClient>(`${BASE_URL}/v1/Cliente/Adicionar`, client);
      const message: IInfo = {
        status: 'success',
        message: 'Cliente cadastrado com sucesso!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      return response.data;
    } catch (error) {
      const message: IInfo = {
        status: 'error',
        message: 'Erro ao cadastrar os dados do cliente, tente novamente mais tarde!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      throw new Error('Failed to create client');
    }
  }

  async getClientById(idClient: number): Promise<any> {
    try {
      const response = await axios.get<IClient>(`${BASE_URL}/v1/Cliente/ListarPorId/${idClient}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed get client by Id');
    }
  }

  async changeDataClient(client: IClient): Promise<any> {
    try {
      const response = await axios.put<IClient>(`${BASE_URL}/v1/Cliente/Alterar`, client);

      const message: IInfo = {
        status: 'success',
        message: 'Cliente alterado com sucesso!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      return response.data;
    } catch (error) {
      
      const message: IInfo = {
        status: 'error',
        message: 'Erro ao editar os dados do cliente, tente novamente mais tarde!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      throw new Error('Failed edit client');
    }
  }

  async deleteClient(idClient: number): Promise<any> {
    try {
      const response = await axios.delete<IClient>(`${BASE_URL}/v1/Cliente/Excluir/${idClient}`);
      const message: IInfo = {
        status: 'success',
        message: 'Cliente removido com sucesso!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      return response.data;
    } catch (error) {
      const message: IInfo = {
        status: 'error',
        message: 'Não foi possível remover o cliente, tente novamente mais tarde!',
        showInfo: true
      }
      store.dispatch(SEND_MESSAGE_ACTION, message)

      throw new Error('Failed get client by Id');
    }
  }
}

