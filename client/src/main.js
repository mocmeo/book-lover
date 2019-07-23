import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import LightBootstrap from "./light-bootstrap-main";

import VueApollo from "vue-apollo";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(LightBootstrap);

export const defaultClient = new ApolloClient({
	link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
	cache: new InMemoryCache(),
	onError: ({ graphQLErrors, networkError }) => {
		if (networkError) {
			console.log("networkError", networkError);
		}
		if (graphQLErrors) {
			for (let err in graphQLErrors) {
				if (err.name === "AuthenticationError") {
					// set auth error in state (to show in snackbar)
					// store.commit("setAuthError", err);
					// signout user (to clear token)
					// store.dispatch("signoutUser");
				}
			}
		}
	}
});

const apolloProvider = new VueApollo({ defaultClient });

new Vue({
	router,
	store,
	apolloProvider,
	render: h => h(App)
}).$mount("#app");
