import Vue from "vue";
import Vuex from "vuex";
import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./main";
import { GET_BOOK_LIST, GET_BOOK } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		book: null,
		books: [],
		loading: false
	},
	mutations: {
		setBookList(state, books) {
			state.books = books;
		},
		setBook(state, book) {
			state.book = book;
		}
	},
	actions: {
		async fetchBookList({ commit }) {
			const res = await apolloClient.query({
				query: GET_BOOK_LIST
			});
			commit("setBookList", res.data.books);
		},
		async fetchBook({ commit }, id) {
			const res = await apolloClient.query({
				query: gql`
					query($bookId: ID!) {
						book(id: $bookId) {
							id
							title
							description
							genres
							imageUrl
							author {
								name
							}
						}
					}
				`,
				variables: { bookId: id }
			});
			commit("setBook", res.data.book);
		}
	},
	getters: {
		books: state => state.books,
		book: state => state.book
	}
});
