import { createWebHistory, createRouter } from 'vue-router';

import Home from './Components/pages/Home'
import DcHeros from './Components/pages/DcHeros'
import Calendar from './Components/pages/Calendar'
import Markdown from './Components/pages/Markdown'
import Calculator from './Components/pages/Calculator'
import Slider from './Components/pages/Slider'
import Chat from './Components/pages/Chat'
import ReusableModal from './Components/pages/ReusableModal'

const routes = [
    {path: '/', component: Home },
    {path: '/dc-heros', component: DcHeros },
    {path: '/calendar', component: Calendar },
    {path: '/markdown', component: Markdown },
    {path: '/calculator', component: Calculator },
    {path: '/slider-carousel', component: Slider },
    {path: '/chat', component: Chat},
    {path: '/reuseable-modal', component: ReusableModal },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;