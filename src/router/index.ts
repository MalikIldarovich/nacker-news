/** Vue Router **/
import { 
    createRouter,
    createWebHistory,
} from 'vue-router';

/** Components **/
import NewsView from '@/views/NewsView.vue';
const NewsIdView = import('@/views/NewsIdView.vue');

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
            name: 'news_id',
            component: NewsIdView,
        },
    ],
});

export default router;
