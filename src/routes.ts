import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginVue from "./pages/Login.vue";
import ClientsVue from "./pages/Clients.vue";
import RegisterVue from './pages/Register.vue';
import NotFoundVue from './pages/NotFound.vue';

const routesList: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/clientes',
    name: 'Clients',
    component: ClientsVue
  },
  {
    path: '/cadastrar',
    name: 'Register',
    component: RegisterVue
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routesList
})

export default router;