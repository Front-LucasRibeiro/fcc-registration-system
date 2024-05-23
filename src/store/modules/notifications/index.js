import { INFO_MESSAGE_MUTATION } from "../../type-mutations";
import { SEND_MESSAGE_ACTION } from "../../type-actions";
export const notificationModule = {
    mutations: {
        [INFO_MESSAGE_MUTATION](state, newNotification) {
            state.notification = { ...newNotification };
        }
    },
    actions: {
        async [SEND_MESSAGE_ACTION]({ commit }, getMessage) {
            try {
                commit(INFO_MESSAGE_MUTATION, getMessage);
            }
            catch (error) {
                console.error('Error send message', error);
            }
        }
    }
};
