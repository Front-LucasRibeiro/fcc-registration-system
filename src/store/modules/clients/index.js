import ClientsApiService from "../../../services/ClientsApiService";
import { GET_CLIENTS_ACTION, ADD_CLIENT_ACTION, FILTER_CLIENT_ACTION, GET_CLIENTBYID_ACTION, SAVE_EDITION_ACTION, DELETE_CLIENT_ACTION } from "../../type-actions";
import { NEW_CLIENT_MUTATION, SET_CLIENTS_MUTATION, GET_CLIENTEDIT_MUTATION, DELETE_CLIENTS_MUTATION } from "../../type-mutations";
export const clientModule = {
    mutations: {
        [NEW_CLIENT_MUTATION](state, client) {
            state.clients.push(client);
        },
        [DELETE_CLIENTS_MUTATION](state, idClient) {
            const index = state.clients.findIndex(client => client.clienteId === idClient);
            if (index !== -1)
                state.clients.splice(index, 1);
        },
        [SET_CLIENTS_MUTATION](state, clients) {
            state.clients = clients;
        },
        [GET_CLIENTEDIT_MUTATION](state, clients) {
            state.clientToEdit = clients;
        },
    },
    actions: {
        async [GET_CLIENTS_ACTION]({ commit }) {
            try {
                const clientsService = new ClientsApiService();
                const clientsData = await clientsService.getClientsList();
                commit(SET_CLIENTS_MUTATION, clientsData);
            }
            catch (error) {
                console.error('Error getting clients:', error);
            }
        },
        async [ADD_CLIENT_ACTION]({}, client) {
            try {
                const clientsService = new ClientsApiService();
                await clientsService.createClient(client);
            }
            catch (error) {
                console.error('Error adding client:', error);
                throw error;
            }
        },
        [FILTER_CLIENT_ACTION]({ commit }, client) {
            commit(SET_CLIENTS_MUTATION, client);
        },
        async [GET_CLIENTBYID_ACTION]({ commit }, idClient) {
            try {
                const clientsService = new ClientsApiService();
                const cliendToEdit = await clientsService.getClientById(idClient);
                commit(GET_CLIENTEDIT_MUTATION, cliendToEdit);
            }
            catch (error) {
                console.error('Error get client by id:', error);
                throw error;
            }
        },
        async [SAVE_EDITION_ACTION]({}, client) {
            try {
                const clientsService = new ClientsApiService();
                await clientsService.changeDataClient(client);
            }
            catch (error) {
                console.error('Error save edition client:', error);
                throw error;
            }
        },
        async [DELETE_CLIENT_ACTION]({ commit }, idClient) {
            try {
                const clientsService = new ClientsApiService();
                await clientsService.deleteClient(idClient);
                commit(DELETE_CLIENTS_MUTATION, idClient);
            }
            catch (error) {
                console.error('Error delete client:', error);
                throw error;
            }
        },
    }
};
