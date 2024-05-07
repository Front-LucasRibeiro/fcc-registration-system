import { ActionContext, Module } from "vuex/types/index.js";
import IClient from "../../../types/IClient";
import { State } from "../..";
import ClientsApiService from "../../../services/ClientsApiService";
import { GET_CLIENTS_ACTION, ADD_CLIENT_ACTION } from "../../type-actions";
import { NEW_CLIENT_MUTATION, EDIT_CLIENT_MUTATION, DELETE_CLIENT_MUTATION, SET_CLIENTS_MUTATION } from "../../type-mutations";

export interface IStateClients {
  clients: IClient[]
}

export const clientModule: Module<IStateClients, State> = {
  mutations: {
    [NEW_CLIENT_MUTATION](state: IStateClients, client: IClient) {
      state.clients.push(client)
    },
    [EDIT_CLIENT_MUTATION](state: IStateClients, client: IClient) {
      
    },
    [DELETE_CLIENT_MUTATION](state: IStateClients, id: number) {
      
    },
    [SET_CLIENTS_MUTATION](state: IStateClients, clients: IClient[]) {
      state.clients = clients
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
        // const clientsService = new ClientsApiService();
        // const newClient = await clientsService.createClient(client);
        commit(NEW_CLIENT_MUTATION, client);
      } catch (error) {
        console.error('Error adding client:', error);
        throw error;
      }
    }
  }
}