import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ItemDetail from "../views/ItemDetail.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/itemDetail",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
