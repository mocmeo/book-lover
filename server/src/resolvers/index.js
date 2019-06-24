const { find, filter } = require("lodash");
const { books, authors } = require("../../fakedb");

const resolvers = {
	Query: {
		books(_, args, context) {
			return books;
		},
		book(_, args, context) {
			return find(books, { id: args.id });
		},
		authors(_, args, context) {
			return authors;
		},
		author(_, args, context) {
			return find(authors, { id: args.id });
		}
	},
	Author: {
		books(author) {
			return filter(books, { author: author.name });
		}
	},
	Book: {
		author(book) {
			return find(authors, { name: book.author });
		}
	}
};

module.exports = resolvers;
