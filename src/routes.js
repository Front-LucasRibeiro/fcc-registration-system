import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "./pages/Login.vue";
import ClientsVue from "./pages/Clients.vue";
import RegisterVue from './pages/Register.vue';
import NotFoundVue from './pages/NotFound.vue';
import EditVue from "./pages/Edit.vue";
const isLoggedIn = () => {
    const isLogged = sessionStorage.getItem('fccUserLogged');
    return isLogged === 'true';
};
const requireAuth = (to, _from, next) => {
    if (to.name !== 'Login' && !isLoggedIn()) {
        next({ name: 'Login' });
    }
    else {
        next();
    }
};
const routesList = [
    {
        path: '/',
        name: 'Login',
        component: LoginVue
    },
    {
        path: '/clientes',
        children: [
            {
                path: '',
                name: 'Clients',
                component: ClientsVue,
                beforeEnter: requireAuth
            },
            {
                path: 'cadastrar',
                name: 'Register',
                component: RegisterVue,
                beforeEnter: requireAuth
            },
            {
                path: 'editar/:id',
                name: 'Edit',
                component: EditVue,
                props: true,
                beforeEnter: requireAuth
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundVue
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routesList
});
export default router;
