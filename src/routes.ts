import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginVue from "./pages/Login.vue";
import ClientsVue from "./pages/Clients.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routesList
})

export default router;