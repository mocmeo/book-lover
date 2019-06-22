const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "./schema/typeDefs.gql");

// Constructing schema & resolvers
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// import models
const Book = require("./models/book");
const Author = require("./models/author");

// connect to mlab database
mongoose
	.connect("mongodb://mocmeo:test123@ds241647.mlab.com:41647/meowtain-book", {
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log(`DB connected`))
	.catch(err => console.log("MongoDB connection error:", err));

// Start server
const server = new ApolloServer({
	cors: true, // enable cross-origin request
	typeDefs,
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
