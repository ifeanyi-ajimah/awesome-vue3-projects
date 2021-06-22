import { createWebHistory, createRouter } from 'vue-router';

import Home from './Components/pages/Home'
import DcHeros from './Components/pages/DcHeros'
import Calendar from './Components/pages/Calendar'
import Markdown from './Components/pages/Markdown'

const routes = [
    {path: '/', component: Home },
    {path: '/dc-heros', component: DcHeros },
    {path: '/calendar', component: Calendar },
    {path: '/markdown', component: Markdown },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;