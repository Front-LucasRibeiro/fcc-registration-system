/* __placeholder__ */
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import InfoModal from './components/InfoModal.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    if (__VLS_ctx.$route.name !== 'Login') {
        const __VLS_0 = {}.Header;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        ({}.Header);
        __VLS_components.Header;
        // @ts-ignore
        [Header,];
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({}));
        // @ts-ignore
        [$route,];
        const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    const __VLS_5 = {}.RouterView;
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({}));
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    const __VLS_10 = {}.InfoModal;
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
    ({}.InfoModal);
    __VLS_components.InfoModal;
    // @ts-ignore
    [InfoModal,];
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    if (__VLS_ctx.$route.name !== 'Login') {
        const __VLS_15 = {}.Footer;
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
        ({}.Footer);
        __VLS_components.Footer;
        // @ts-ignore
        [Footer,];
        const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
        ({}({}));
        // @ts-ignore
        [$route,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Footer: Footer,
            InfoModal: InfoModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
