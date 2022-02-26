import { createRouter, createWebHistory } from "vue-router";
import Home from  "./pages/home.vue";
import About from  "./pages/about.vue";
import Services from  "./pages/services.vue";
import NotFound from  "./pages/404.vue";
import Help from  "./pages/help.vue";

const routes = [
    {
path: "/home",
name: "Home",
component: Home,
    },
    {
path: "/about",
name: "About",
component: About,
    },
    {

path: "/services",
name: "Services",
component: Services,

},
{

},
{

path: "/help",
name: "Help",
component: Help,

},
{
path: "/:pathMatch(.*)*",
name: "NotFound",
component: NotFound,
    },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;