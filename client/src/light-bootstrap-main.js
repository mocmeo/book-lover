import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/SidebarPlugin";

// asset imports
import "bootstrap/dist/css/bootstrap.css";
import "./assets/sass/light-bootstrap-dashboard.scss";
import "./assets/css/demo.css";

export default {
	install(Vue) {
		Vue.use(GlobalComponents);
		Vue.use(GlobalDirectives);
		Vue.use(SideBar);
	}
};
