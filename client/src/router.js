import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "./views/Overview";
import UserProfile from "./views/UserProfile";
import DashboardLayout from "./layout/Admin/DashboardLayout.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			exact: true,
			component: Home
		},
		{
			path: "/about",
			name: "about",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/admin",
			component: DashboardLayout,
			redirect: "/admin/overview",
			children: [
				{
					path: "overview",
					name: "Overview",
					component: Overview
				},
				{
					path: "user",
					name: "User",
					component: UserProfile
				}
			]
		}
	]
});
