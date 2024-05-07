import { InjectionKey } from "vue";
import { clientModule, IStateClients } from "./modules/clients";
import { IStateNotifications, notificationModule } from "./modules/notifications";
import { Store, createStore, useStore } from "vuex";

export interface State {
  clientsList: IStateClients
  notificationData: IStateNotifications
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    clientsList: {
      clients: [],
    },
    notificationData: {
      notification: {
        showInfo: false,
        message: '',
        status: ''
      }
    }
  },
  modules: {
    clientModule,
    notificationModule
  }
})


export function sourceStore(): Store<State> {
  return useStore(key)
}