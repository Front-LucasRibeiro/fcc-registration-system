import IClient from "@/types/IClient";
import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";

interface State {
  clients: IClient[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    clients: [
      {
        cpf: '401.592.928-40',
        name: 'Lucas Lima Ribeiro Maranho',
        RG: '48.207.459-0',
        issueDate: '13/04/2005',
        issuingAuthority: 'SSP',
        state: 'SP',
        birthDate: '21/05/1992',
        gender: 'Masculino',
        maritalStatus: 'Casado'
      }
    ]
  }
})