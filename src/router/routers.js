import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import Creator from '../views/creater.vue'
import Afk from '../views/afk.vue'
import Redeem from '../views/redeem.vue'
import Rules from '../views/rules.vue'
import Settings from '../views/settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'Home', component: Home},
        {path: '/CreateServer', name: 'CreateServer', component: Creator},
        {path: '/AFK', name: 'AFK', component: Afk},
        {path: '/Redeem', name: 'Redeem', component: Redeem},
        {path: '/Rules', name: 'Rules', component: Rules},
        {path: '/Settings', name: 'Settings', component: Settings},
    ]
})

export default router