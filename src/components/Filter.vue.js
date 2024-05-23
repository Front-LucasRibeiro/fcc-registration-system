/* __placeholder__ */
import { computed } from 'vue';
import { useStore } from '../store';
import { FILTER_CLIENT_ACTION } from '../store/type-actions';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const clientsDataList = computed(() => store.state.clientModule.clients);
const handleFilter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = clientsDataList.value.map((client) => {
        return {
            ...client,
            exibeItem: client.nome.toLowerCase().includes(inputValue) || client.cpf.toLowerCase().includes(inputValue) ? true : false
        };
    });
    store.dispatch(FILTER_CLIENT_ACTION, filtered);
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("filter"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("filter"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ onKeyup: (__VLS_ctx.handleFilter),
        type: ("text"), class: ("filter__field"), id: ("filter"), placeholder: ("filtrar..."), });
    // @ts-ignore
    [handleFilter,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["filter"];
        __VLS_styleScopedClasses["filter__field"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            handleFilter: handleFilter,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
