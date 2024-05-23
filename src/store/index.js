import { clientModule } from "./modules/clients";
import { notificationModule } from "./modules/notifications";
import { createStore, useStore as sourceStore } from "vuex";
export const key = Symbol();
export const store = createStore({
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
});
export function useStore() {
    return sourceStore(key);
}
