import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/post",
            component: () => import("./components/Post/Index"),
            name: "post.index",
        },
        {
            path: "/post/create",
            component: () => import("./components/Post/Create"),
            name: "post.create",
        },
        {
            path: "/post/:id/edit",
            component: () => import("./components/Post/Edit"),
            name: "post.edit",
        },
        {
            path: "/post/:id",
            component: () => import("./components/Post/Show"),
            name: "post.show",
        },
    ],
});
