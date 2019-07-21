import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(BootstrapVue);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
