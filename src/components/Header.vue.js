/* __placeholder__ */
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const logOut = () => {
    sessionStorage.removeItem('fccUserLogged');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ class: ("header"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/public/cropped-iconeFCC-1-32x32.png"), alt: ("FCC - Fundação Carlos Chagas"), class: ("header__logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ class: ("header__nav"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_0 = {}.RouterLink;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/clientes"), }));
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_2 = __VLS_1({ to: ("/clientes"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/clientes"), }));
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_5 = {}.RouterLink;
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ to: ("/clientes/cadastrar"), }));
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_7 = __VLS_6({ to: ("/clientes/cadastrar"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ to: ("/clientes/cadastrar"), }));
    (__VLS_9.slots).default;
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_10 = {}.RouterLink;
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onClick': {}, }, to: ("/"), }));
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{ 'onClick': {}, }, to: ("/"), }));
    let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_13['click'], {}.onClick) };
    __VLS_15 = { click: (__VLS_ctx.logOut) };
    // @ts-ignore
    [logOut,];
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    let __VLS_13;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["header"];
        __VLS_styleScopedClasses["header__logo"];
        __VLS_styleScopedClasses["header__nav"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            logOut: logOut,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
