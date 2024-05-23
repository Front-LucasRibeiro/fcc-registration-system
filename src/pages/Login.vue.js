/* __placeholder__ */
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginApiService from '../services/LoginApiService';
import { useStore } from '../store';
import { SEND_MESSAGE_ACTION } from '../store/type-actions';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const textChangePassword = ref('password');
const fieldPassword = ref('');
const fieldUser = ref('');
const router = useRouter();
const store = useStore();
const login = async () => {
    const loginService = new LoginApiService();
    const loginData = await loginService.getUserLogin();
    const user = loginData.find(user => user.user === fieldUser.value && user.password === fieldPassword.value);
    if (fieldUser.value === '' || fieldPassword.value === '') {
        const message = {
            status: 'error',
            message: 'Por favor, preencha todos os campos!',
            showInfo: true
        };
        store.dispatch(SEND_MESSAGE_ACTION, message);
    }
    else if (user) {
        sessionStorage.setItem('fccUserLogged', "true");
        router.push('/clientes');
    }
    else {
        const message = {
            status: 'error',
            message: 'Usuário não encontrado, por favor, verifique os dados informados e tente novamente!',
            showInfo: true
        };
        store.dispatch(SEND_MESSAGE_ACTION, message);
    }
};
const changeViewPassword = (e) => {
    e.preventDefault();
    if (textChangePassword.value === 'password') {
        textChangePassword.value = 'text';
    }
    else {
        textChangePassword.value = 'password';
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("login"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ class: ("title"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ onSubmit: (__VLS_ctx.login),
        class: ("login__form"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({ class: ("login__field"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("user"), });
    // @ts-ignore
    [login,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("user"), name: ("user"), value: ((__VLS_ctx.fieldUser)), });
    // @ts-ignore
    [fieldUser,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({ class: ("login__field"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("login__field--password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ((__VLS_ctx.textChangePassword)), id: ("password"), name: ("password"), });
    (__VLS_ctx.fieldPassword);
    // @ts-ignore
    [textChangePassword, fieldPassword,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ onClick: (__VLS_ctx.changeViewPassword),
        class: ("login__field--btnShowPassword"), title: ("Ver senha"), });
    (__VLS_ctx.textChangePassword);
    __VLS_styleScopedClasses = (textChangePassword);
    // @ts-ignore
    [textChangePassword, changeViewPassword,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), class: ("button"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["login"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["login__form"];
        __VLS_styleScopedClasses["login__field"];
        __VLS_styleScopedClasses["login__field"];
        __VLS_styleScopedClasses["login__field--password"];
        __VLS_styleScopedClasses["login__field--btnShowPassword"];
        __VLS_styleScopedClasses["button"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            textChangePassword: textChangePassword,
            fieldPassword: fieldPassword,
            fieldUser: fieldUser,
            login: login,
            changeViewPassword: changeViewPassword,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
