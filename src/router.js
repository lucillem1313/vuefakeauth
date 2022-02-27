import { createRouter, createWebHistory } from "vue-router";
import Home  from "./pages/index.vue";
import About from  "./pages/about.vue";
import Login from  "./pages/login.vue";
import NotFound from  "./pages/404.vue";
import Help from  "./pages/help.vue";

const routes = [
    {
path: "/index",
name: "Home",
component: Home,
    },
    {
path: "/about",
name: "About",
component: About,
    },
    {

path: "/login",
name: "login",
component: Login,

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