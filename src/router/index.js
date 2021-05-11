import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import ItemDetail from "../views/ItemDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/itemDetail",
    name: "ItemDetail",
    component: ItemDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
