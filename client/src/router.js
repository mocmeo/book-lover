import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "./views/Overview";
import UserProfile from "./views/UserProfile";
import TableList from "./views/TableList";
import Typography from "./views/Typography";
import Icons from "./views/Icons";
import Notifications from "./views/Notifications";
import Upgrade from "./views/Upgrade";
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
				},
				{
					path: "table-list",
					name: "Table List",
					component: TableList
				},
				{
					path: "typography",
					name: "Typography",
					component: Typography
				},
				{
					path: "icons",
					name: "Icons",
					component: Icons
				},
				{
					path: "notifications",
					name: "Notifications",
					component: Notifications
				},
				{
					path: "upgrade",
					name: "Upgrade to PRO",
					component: Upgrade
				}
			]
		}
	]
});
