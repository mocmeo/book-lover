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
		books(parent, args, { Book, Author }) {
			return Book.find({ author: parent.name });
		}
	},
	Book: {
		author(parent, args, { Author }) {
			return Author.findOne({ name: parent.author });
		}
	}
};

module.exports = resolvers;
