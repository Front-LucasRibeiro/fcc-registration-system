/* __placeholder__ */
import { ref, watchEffect } from 'vue';
import { SAVE_EDITION_ACTION, ADD_CLIENT_ACTION } from '../store/type-actions';
import { z } from 'zod';
import { store } from '../store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const schema = z.object({
    nome: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .min(3, { message: 'Campo deve ter no mínimo 3 caracteres' })
        .max(100, { message: 'Campo deve ter no máximo 100 caracteres' }),
    sexo: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .min(1, { message: 'Campo deve ter no mínimo 1 caracter' }),
    cpf: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(11, { message: 'O CPF deve ter no máximo 11 caracteres' }),
    rg: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' }),
    dataExpedicao: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .date('Formato de data inválido'),
    dataNascimento: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .date('Formato de data inválido'),
    estadoCivil: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .min(3, { message: 'Campo deve ter no mínimo 3 caracteres' }),
    cep: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(8, 'Campo deve ter no máximo 8 caracteres'),
    logradouro: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(100, 'Campo deve ter no máximo 100 caracteres'),
    numero: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(10, 'Campo deve ter no máximo 10 caracteres'),
    bairro: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(50, 'Campo deve ter no máximo 50 caracteres'),
    cidade: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(50, 'Campo deve ter no máximo 50 caracteres'),
    ufEndereco: z.string({ message: 'Campo Obrigatório' })
        .nonempty({ message: 'Campo Obrigatório' })
        .max(2, 'Campo deve ter no máximo 2 caracteres'),
});
const props = defineProps({
    id: String,
    typeSave: String,
    clientToEdit: Object
});
const formDataClient = ref({
    clienteId: '',
    cpf: '',
    nome: '',
    rg: '',
    dataExpedicao: '',
    orgaoExpedicao: '',
    uf: '',
    dataNascimento: '',
    sexo: '',
    estadoCivil: '',
    enderecoId: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    ufEndereco: '',
});
watchEffect(() => {
    formDataClient.value = {
        clienteId: props.clientToEdit?.clienteId,
        nome: props.clientToEdit?.nome,
        cpf: props.clientToEdit?.cpf,
        rg: props.clientToEdit?.rg,
        dataExpedicao: props.clientToEdit?.dataExpedicao.split('T')[0],
        orgaoExpedicao: props.clientToEdit?.orgaoExpedicao,
        uf: props.clientToEdit?.uf,
        dataNascimento: props.clientToEdit?.dataNascimento.split('T')[0],
        sexo: props.clientToEdit?.sexo,
        estadoCivil: props.clientToEdit?.estadoCivil,
        enderecoId: props.clientToEdit?.endereco.enderecoId,
        cep: props.clientToEdit?.endereco.cep,
        logradouro: props.clientToEdit?.endereco.logradouro,
        numero: props.clientToEdit?.endereco.numero,
        complemento: props.clientToEdit?.endereco.complemento,
        bairro: props.clientToEdit?.endereco.bairro,
        cidade: props.clientToEdit?.endereco.cidade,
        ufEndereco: props.clientToEdit?.endereco.uf
    };
});
const fieldErrors = ref({});
const saveClient = () => {
    const validClient = schema.safeParse(formDataClient.value);
    if (validClient.success) {
        fieldErrors.value = {}; // Limpar erros existentes
        let data = {
            clienteId: formDataClient.value.clienteId,
            cpf: validClient.data.cpf,
            nome: validClient.data.nome,
            rg: validClient.data.rg,
            dataExpedicao: validClient.data.dataExpedicao,
            orgaoExpedicao: formDataClient.value.orgaoExpedicao,
            uf: formDataClient.value.uf,
            dataNascimento: validClient.data.dataNascimento,
            sexo: validClient.data.sexo,
            estadoCivil: validClient.data.estadoCivil,
            endereco: {
                enderecoId: formDataClient.value.enderecoId,
                cep: validClient.data.cep,
                logradouro: validClient.data.logradouro,
                numero: validClient.data.numero,
                complemento: formDataClient.value.complemento,
                bairro: validClient.data.bairro,
                cidade: validClient.data.cidade,
                uf: validClient.data.ufEndereco
            }
        };
        if (props.typeSave === 'edit') {
            store.dispatch(SAVE_EDITION_ACTION, data);
        }
        else if ((props.typeSave === 'created')) {
            store.dispatch(ADD_CLIENT_ACTION, data);
        }
    }
    else {
        fieldErrors.value = {}; // Limpar erros existentes
        const errors = validClient.error.issues;
        errors.forEach((error) => {
            const fieldPath = error.path;
            const fieldName = fieldPath[0];
            fieldErrors.value[fieldName] = fieldErrors.value[fieldName] || [];
            fieldErrors.value[fieldName].push(error.message);
        });
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        id: String,
        typeSave: String,
        clientToEdit: Object
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("edit container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ class: ("title"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ onSubmit: (__VLS_ctx.saveClient),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("edit__sectionForm"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ class: ("subTitle"), });
    // @ts-ignore
    [saveClient,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("edit__form"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.formDataClient.nome)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['nome']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['nome'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("cpf"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("cpf"), value: ((__VLS_ctx.formDataClient.cpf)), placeholder: ("99999999999"), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['cpf']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['cpf'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("rg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("rg"), value: ((__VLS_ctx.formDataClient.rg)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['rg']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['rg'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("issueDate"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ((__VLS_ctx.typeSave === 'edit' ? 'text' : 'date')), id: ("issueDate"), });
    (__VLS_ctx.formDataClient.dataExpedicao);
    // @ts-ignore
    [formDataClient, typeSave,];
    if (__VLS_ctx.fieldErrors['dataExpedicao']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['dataExpedicao'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("issuingAuthority"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("issuingAuthority"), value: ((__VLS_ctx.formDataClient.orgaoExpedicao)), });
    // @ts-ignore
    [formDataClient,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("uf"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("uf"), value: ((__VLS_ctx.formDataClient.uf)), });
    // @ts-ignore
    [formDataClient,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("birthDate"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ((__VLS_ctx.typeSave === 'edit' ? 'text' : 'date')), id: ("birthDate"), });
    (__VLS_ctx.formDataClient.dataNascimento);
    // @ts-ignore
    [formDataClient, typeSave,];
    if (__VLS_ctx.fieldErrors['dataNascimento']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['dataNascimento'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("gender"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("gender"), value: ((__VLS_ctx.formDataClient.sexo)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['sexo']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['sexo'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("maritalStatus"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("maritalStatus"), value: ((__VLS_ctx.formDataClient.estadoCivil)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['estadoCivil']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['estadoCivil'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ class: ("edit__sectionForm"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ class: ("subTitle"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("edit__form"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("cepVal"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("cepVal"), value: ((__VLS_ctx.formDataClient.cep)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['cep']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['cep'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("street"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("street"), value: ((__VLS_ctx.formDataClient.logradouro)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['logradouro']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['logradouro'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("number"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("number"), value: ((__VLS_ctx.formDataClient.numero)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['numero']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['numero'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("complement"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("complement"), value: ((__VLS_ctx.formDataClient.complemento)), });
    // @ts-ignore
    [formDataClient,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("neighborhood"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("neighborhood"), value: ((__VLS_ctx.formDataClient.bairro)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['bairro']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['bairro'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("city"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("city"), value: ((__VLS_ctx.formDataClient.cidade)), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['cidade']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['cidade'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("state"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("state"), value: ((__VLS_ctx.formDataClient.ufEndereco)), placeholder: ("XX"), });
    // @ts-ignore
    [formDataClient,];
    if (__VLS_ctx.fieldErrors['ufEndereco']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ class: ("error-message"), });
        (__VLS_ctx.fieldErrors['ufEndereco'][0]);
        // @ts-ignore
        [fieldErrors, fieldErrors,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ class: ("button"), type: ("submit"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["edit"];
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["edit__sectionForm"];
        __VLS_styleScopedClasses["subTitle"];
        __VLS_styleScopedClasses["edit__form"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["edit__sectionForm"];
        __VLS_styleScopedClasses["subTitle"];
        __VLS_styleScopedClasses["edit__form"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["error-message"];
        __VLS_styleScopedClasses["button"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            formDataClient: formDataClient,
            fieldErrors: fieldErrors,
            saveClient: saveClient,
        };
    },
    props: {
        id: String,
        typeSave: String,
        clientToEdit: Object
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        id: String,
        typeSave: String,
        clientToEdit: Object
    },
});
