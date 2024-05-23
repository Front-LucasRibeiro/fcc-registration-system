/* __placeholder__ */
import { onMounted, computed } from 'vue';
import FormClient from '../components/FormClient.vue';
import { GET_CLIENTBYID_ACTION } from '../store/type-actions';
import { useRoute } from 'vue-router';
import { useStore } from '../store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const store = useStore();
const clientId = computed(() => route.params.id);
const client = computed(() => store.state.clientModule.clientToEdit);
const getDataClientById = () => {
    store.dispatch(GET_CLIENTBYID_ACTION, clientId.value);
};
onMounted(() => {
    getDataClientById();
});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.FormClient;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ clientToEdit: ((__VLS_ctx.client)), typeSave: ("edit"), }));
    ({}.FormClient);
    __VLS_components.FormClient;
    // @ts-ignore
    [FormClient,];
    const __VLS_2 = __VLS_1({ clientToEdit: ((__VLS_ctx.client)), typeSave: ("edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ clientToEdit: ((__VLS_ctx.client)), typeSave: ("edit"), }));
    // @ts-ignore
    [client,];
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            FormClient: FormClient,
            client: client,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
