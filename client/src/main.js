import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "font-awesome/css/font-awesome.min.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
