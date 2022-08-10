import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import PaymentHistoryView from "../views/PaymentHistoryView.vue";
import NotificationView from "../views/NotificationView.vue";
import UsersView from "../views/UsersView.vue";
import LoginView from "../views/LoginView.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresLogin: true },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: NotificationView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: StatisticsView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/payment-history",
    name: "payment-history",
    component: PaymentHistoryView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (!store.state.user.isAuthenticated && to.path != "/login") {
    // You can use store variable here to access globalError or commit mutation
    next("/login");
  } else {
    next();
  }
});

export default router;
