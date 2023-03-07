import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetails from "@/views/CharacterDetails.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/characters',
        name: 'Home'
    },
    {
        path: '/characters',
        component: CharacterList,
        name: 'CharacterList',
    },
    {
        path: '/characters/:id',
        component: CharacterDetails,
        name: 'CharacterDetails',
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound
    }
];

const BASE_URL = `rickpedia`;

const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
});

export default router;