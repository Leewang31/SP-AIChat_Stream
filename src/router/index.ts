import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import StreamHub from '../components/StreamHub.vue';
import StreamingInterface from '../components/StreamingInterface.vue';
import Home from '../components/Home.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/stream', component: StreamHub },
  { path: '/streaming', component: StreamingInterface },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
