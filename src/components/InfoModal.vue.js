/* __placeholder__ */
import { computed } from 'vue';
import { useStore } from '../store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const notificationData = computed(() => store.state.notificationModule.notification);
const closeModal = () => {
    notificationData.value.showInfo = false;
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
    if (__VLS_ctx.notificationData?.showInfo) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("infoModal"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("infoModal__content"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ onClick: (__VLS_ctx.closeModal),
            class: ("infoModal__close"), });
        // @ts-ignore
        [notificationData, closeModal,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ class: ("infoModal__text"), });
        (__VLS_ctx.notificationData.message);
        // @ts-ignore
        [notificationData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("infoModal__icon"), });
        (__VLS_ctx.notificationData.status);
        __VLS_styleScopedClasses = (notificationData.status);
        // @ts-ignore
        [notificationData,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["infoModal"];
        __VLS_styleScopedClasses["infoModal__content"];
        __VLS_styleScopedClasses["infoModal__close"];
        __VLS_styleScopedClasses["infoModal__text"];
        __VLS_styleScopedClasses["infoModal__icon"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            notificationData: notificationData,
            closeModal: closeModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
