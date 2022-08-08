import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Options from '../views/Options.vue';
import CompositionScreen from '../views/CompositionScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Options',
    component: Options,
  },
  {
    path: '/composition',
    name: 'Composition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CompositionScreen,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
