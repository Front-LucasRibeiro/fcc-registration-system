/* __placeholder__ */
import { useStore } from '../store';
import { computed, onMounted } from 'vue';
import { GET_CLIENTS_ACTION } from '../store/type-actions';
import Filter from '../components/Filter.vue';
import router from '../routes';
import { DELETE_CLIENT_ACTION } from '../store/type-actions';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const clientsDataList = computed(() => store.state.clientModule.clients);
const editClient = (clienteId) => {
    router.push(`/clientes/editar/${clienteId}`);
};
const deleteClient = (clienteId) => {
    store.dispatch(DELETE_CLIENT_ACTION, clienteId);
};
onMounted(() => {
    store.dispatch(GET_CLIENTS_ACTION);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("list container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ class: ("title"), });
    const __VLS_0 = {}.Filter;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    ({}.Filter);
    __VLS_components.Filter;
    // @ts-ignore
    [Filter,];
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("list__tableWrap"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ class: ("list__table"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    for (const [client] of __VLS_getVForSourceType((__VLS_ctx.clientsDataList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ key: ((client.idClient)), });
        if (client?.exibeItem || !client.hasOwnProperty('exibeItem')) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.nome);
            // @ts-ignore
            [clientsDataList,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.cpf);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.rg);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.dataNascimento);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.sexo);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (client.estadoCivil);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ onClick: $event => {
                    if (!((client?.exibeItem || !client.hasOwnProperty('exibeItem'))))
                        return;
                    __VLS_ctx.editClient(client.clienteId);
                    // @ts-ignore
                    [editClient,];
                },
                class: ("button"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ onClick: $event => {
                    if (!((client?.exibeItem || !client.hasOwnProperty('exibeItem'))))
                        return;
                    __VLS_ctx.deleteClient(client.clienteId);
                    // @ts-ignore
                    [deleteClient,];
                },
                class: ("button"), });
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["list"];
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["list__tableWrap"];
        __VLS_styleScopedClasses["list__table"];
        __VLS_styleScopedClasses["button"];
        __VLS_styleScopedClasses["button"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Filter: Filter,
            clientsDataList: clientsDataList,
            editClient: editClient,
            deleteClient: deleteClient,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
