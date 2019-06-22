const _ = require("lodash");
const { books, authors } = require("../fakedb");

const resolvers = {
	Query: {
		books(parent, args, context, info) {
			return books;
		},
		book(parent, args, context, info) {
			return _.find(books, { id: args.id });
		},
		authors(parent, args, context, info) {
			return authors;
		},
		author(parent, args, context, info) {
			return _.find(authors, { id: args.id });
		}
	},
	Author: {
		books(author) {
			return _.filter(books, { authorId: author.id });
		}
	},
	Book: {
		author(book) {
			return _.find(authors, { id: book.authorId });
		}
	}
};

module.exports = resolvers;
