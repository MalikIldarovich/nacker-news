/** Vue Router **/
import { 
    createRouter,
    createWebHistory,
} from 'vue-router';

/** Components **/
import NewsView from '@/views/NewsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/news/:id',
            component: () => import('@/views/NewsIdView.vue'),
        },
    ],
});

export default router;
