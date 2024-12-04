import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Maintenance from '../views/Maintenance.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import Home from '../views/Home.vue';
import UserManagement from '../views/UserManagement.vue';
import Equipement from '../views/Equipement.vue';
import Department from '../views/Departement.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance,
    },
    {
      path: '/user-management',
      name: 'user-management',
      component: UserManagement,
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: Equipement,
    },
    {
      path: '/departments',
      name: 'departments',
      component: Department,
    },
    {
      path: '/:pathMatch(.*)*', // Route pour 404 page non trouvée
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router;
