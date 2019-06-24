const resolvers = {
	Query: {
		books(_, args, { Book }) {
			return Book.find({});
		},
		book(_, args, { Book }) {
			return Book.findById(args.id);
		},
		authors(_, args, { Author }) {
			return Author.find({});
		},
		author(_, args, { Author }) {
			return Author.findById(args.id);
		}
	},
	Author: {
		books(author, args, { Book }) {
			return Book.find({ author: author.name });
		}
	},
	Book: {
		author(book, args, { Author }) {
			return Author.find({ name: book.author });
		}
	}
};

module.exports = resolvers;
