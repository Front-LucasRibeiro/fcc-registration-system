import { ActionContext, Module } from "vuex/types/index.js";
import IClient from "../../../types/IClient";
import { State } from "../..";
import ClientsApiService from "../../../services/ClientsApiService";
import { GET_CLIENTS_ACTION, ADD_CLIENT_ACTION, FILTER_CLIENT_ACTION, GET_CLIENTBYID_ACTION, SAVE_EDITION_ACTION, DELETE_CLIENT_ACTION } from "../../type-actions";
import { NEW_CLIENT_MUTATION, SET_CLIENTS_MUTATION, GET_CLIENTEDIT_MUTATION, DELETE_CLIENTS_MUTATION } from "../../type-mutations";

export interface IStateClients {
  clients: IClient[]
  clientToEdit: IClient
}

export const clientModule: Module<IStateClients, State> = {
  mutations: {
    [NEW_CLIENT_MUTATION](state: IStateClients, client: IClient) {
      state.clients.push(client)
    },
    [DELETE_CLIENTS_MUTATION](state: IStateClients, idClient: number) {
      const index = state.clients.findIndex(client => client.clienteId === idClient);
      if (index !== -1) state.clients.splice(index, 1);
    },
    [SET_CLIENTS_MUTATION](state: IStateClients, clients: IClient[]) {
      state.clients = clients
    },
    [GET_CLIENTEDIT_MUTATION](state: IStateClients, clients: IClient) {
      state.clientToEdit = clients
    },
  }, 
  actions: {
    async [GET_CLIENTS_ACTION]({ commit }: ActionContext<IStateClients, State>) {
      try {
        const clientsService = new ClientsApiService();
        const clientsData = await clientsService.getClientsList();
        commit(SET_CLIENTS_MUTATION, clientsData)
      } catch (error) {
        console.error('Error getting clients:', error);        
      }
    },
    async [ADD_CLIENT_ACTION]({ commit }: ActionContext<IStateClients, State>, client: IClient) {
      try {
        const clientsService = new ClientsApiService();
        const newClient = await clientsService.createClient(client);
        commit(NEW_CLIENT_MUTATION, newClient);
      } catch (error) {
        console.error('Error adding client:', error);
        throw error;
      }
    },
    [FILTER_CLIENT_ACTION]({ commit }: ActionContext<IStateClients, State>, client: IClient) {
      commit(SET_CLIENTS_MUTATION, client);
    },
    async [GET_CLIENTBYID_ACTION]({ commit }: ActionContext<IStateClients, State>, idClient: number) {
      try {
        const clientsService = new ClientsApiService();
        const cliendToEdit = await clientsService.getClientById(idClient);
        commit(GET_CLIENTEDIT_MUTATION, cliendToEdit);
      } catch (error) {
        console.error('Error get client by id:', error);
        throw error;
      }
    },
    async [SAVE_EDITION_ACTION]({ commit }: ActionContext<IStateClients, State>, client: IClient) {
      try {
        const clientsService = new ClientsApiService();
        const dataClient = await clientsService.changeDataClient(client);
        commit(SET_CLIENTS_MUTATION, dataClient);
      } catch (error) {
        console.error('Error save edition client:', error);
        throw error;
      }
    },
    async [DELETE_CLIENT_ACTION]({ commit }: ActionContext<IStateClients, State>, idClient: number) {
      try {
        const clientsService = new ClientsApiService();
        await clientsService.deleteClient(idClient);
        commit(DELETE_CLIENTS_MUTATION, idClient);
      } catch (error) {
        console.error('Error delete client:', error);
        throw error;
      }
    },
  }
}