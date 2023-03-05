import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetails from "@/components/CharacterDetails.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/characters',
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
    }
    // TODO:  Create NotFound view
    // { path: '/:pathMatch(.*)', component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;