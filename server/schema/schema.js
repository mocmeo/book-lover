const graphql = require("graphql");
const _ = require("lodash");
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;
// const Book = require("../models/book");
// const Author = require("../models/author");

// // dummy data
var books = [
	{
		title: "Name of the Wind",
		description: "Bla blo bla blo",
		genres: ["Fantasy", "Sci-fi"],
		imageUrl: "http://image.url",
		id: "1",
		authorId: "1",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	},
	{
		title: "The Final Empire",
		description: "Bla blo bla blo",
		genres: ["Drama"],
		imageUrl: "http://image.url",
		id: "2",
		authorId: "2",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	},
	{
		title: "The Hero of Ages",
		description: "Bla blo bla blo",
		genres: ["Teens"],
		imageUrl: "http://image.url",
		id: "3",
		authorId: "3",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	}
];

var authors = [
	{ name: "Patrick Rothfuss", age: 44, id: "1" },
	{ name: "Brandon Sanderson", age: 42, id: "2" },
	{ name: "Terry Pratchett", age: 66, id: "3" }
];

const DataItemType = new GraphQLObjectType({
	name: "DataItem",
	fields: () => ({
		text: { type: GraphQLString },
		content: { type: GraphQLString }
	})
});

const BookType = new GraphQLObjectType({
	name: "Book",
	// (reason to use function)
	// we're not actually executing it, until the whole file has run
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				return _.find(authors, { id: parent.authorId });
			}
		},
		imageUrl: { type: GraphQLString },
		genres: {
			type: new GraphQLList(GraphQLString)
		},
		data: {
			type: new GraphQLList(DataItemType)
		}
	})
});

const AuthorType = new GraphQLObjectType({
	name: "Author",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return _.filter(books, { authorId: parent.id });
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return _.find(books, { id: args.id });
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return _.find(authors, { id: args.id });
			}
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return books;
			}
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, args) {
				return authors;
			}
		}
	})
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
